"""
Script to convert static HTML templates to Django templates.
Adds {% load static %}, converts static file paths to {% static %} tags,
and converts page links to {% url %} tags.
"""
import re
import os

TEMPLATES_DIR = os.path.join(os.path.dirname(__file__), 'templates')

# Map of .html filenames to their Django URL names
PAGE_URL_MAP = {
    'index.html': 'index',
    'about.html': 'about',
    'offers.html': 'offers',
    'blog.html': 'blog',
    'contact.html': 'contact',
    'single_listing.html': 'single_listing',
    'elements.html': 'elements',
}

# Static file path patterns (href="..." and src="...")
# These are relative paths to static files
STATIC_PREFIXES = [
    'styles/',
    'plugins/',
    'js/',
    'images/',
    'fonts/',
]


def convert_template(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add {% load static %} after <!DOCTYPE html> if not already present
    if '{% load static %}' not in content:
        content = content.replace('<!DOCTYPE html>', '{% load static %}\n<!DOCTYPE html>')

    # 2. Convert static file references in href="..." attributes
    for prefix in STATIC_PREFIXES:
        # href="styles/..." -> href="{% static 'styles/...' %}"
        content = re.sub(
            r'href="(' + re.escape(prefix) + r'[^"]*)"',
            lambda m: 'href="{% static \'' + m.group(1) + '\' %}"',
            content
        )
        # src="styles/..." -> src="{% static 'styles/...' %}"
        content = re.sub(
            r'src="(' + re.escape(prefix) + r'[^"]*)"',
            lambda m: 'src="{% static \'' + m.group(1) + '\' %}"',
            content
        )

    # 3. Convert background-image:url(images/...) patterns
    content = re.sub(
        r'background-image:url\((' + '|'.join(re.escape(p) for p in STATIC_PREFIXES) + r'[^)]*)\)',
        lambda m: "background-image:url({% static '" + m.group(1) + "' %})",
        content
    )

    # 4. Convert data-image-src="images/..." patterns
    content = re.sub(
        r'data-image-src="(' + '|'.join(re.escape(p) for p in STATIC_PREFIXES) + r'[^"]*)"',
        lambda m: "data-image-src=\"{% static '" + m.group(1) + "' %}\"",
        content
    )

    # 5. Convert page links: href="about.html" -> href="{% url 'about' %}"
    for filename, url_name in PAGE_URL_MAP.items():
        content = content.replace(
            f'href="{filename}"',
            f"{{% url '{url_name}' %}}"
        )

    # Fix: the replacement above loses the href=" prefix, fix it
    # Actually let me redo this more carefully
    # Revert and do it properly
    # Re-read original content won't work since we already modified it
    # Let's fix the pattern - we need href="{% url '...' %}"
    for filename, url_name in PAGE_URL_MAP.items():
        # Fix any broken patterns from the previous replacement
        content = content.replace(
            f"{{% url '{url_name}' %}}",
            f'href="{{% url \'{url_name}\' %}}"'
        )
        # Also handle if the original href="filename.html" wasn't caught
        content = content.replace(
            f'href="{filename}"',
            f'href="{{% url \'{url_name}\' %}}"'
        )

    return content


def main():
    templates = [
        'index.html',
        'about.html',
        'offers.html',
        'blog.html',
        'contact.html',
        'single_listing.html',
        'elements.html',
    ]

    for template in templates:
        filepath = os.path.join(TEMPLATES_DIR, template)
        if os.path.exists(filepath):
            print(f'Converting {template}...')
            content = convert_template(filepath)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'  Done!')
        else:
            print(f'  Skipping {template} (not found)')

    print('\nAll templates converted successfully!')


if __name__ == '__main__':
    main()
