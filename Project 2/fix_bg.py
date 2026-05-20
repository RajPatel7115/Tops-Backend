"""
Script to fix remaining background-image:url(images/...) patterns in templates.
"""
import re
import os

TEMPLATES_DIR = os.path.join(os.path.dirname(__file__), 'templates')


def fix_bg_images(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix background-image:url(images/...) -> background-image:url({% static 'images/...' %})
    content = re.sub(
        r"background-image:url\((images/[^)]+)\)",
        lambda m: "background-image:url({% static '" + m.group(1) + "' %})",
        content
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)


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
            print(f'Fixing {template}...')
            fix_bg_images(filepath)
            print(f'  Done!')

    print('\nAll background images fixed!')


if __name__ == '__main__':
    main()
