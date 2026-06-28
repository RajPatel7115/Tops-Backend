from datetime import datetime


user_data = [] # fpr store users

posts_data = [] # for post datas

def register():
    while True:
        username = input("Enter Your Username: ").strip().lower()
        if not username:
            print("Username is Cannot Be Empty.\n")
        elif username in user_data:
            print("User Already Exists.\n")
        else:
            user_data.append(username)
            print(f"welcome {username}\n")
            return username
    
def posts(user):
    post_title = input("Enter Post Title: ").strip()
    post_desc = input("Enter Description Of Post: ").strip()

    if not post_title and not post_desc:
        print("Title And Desc Cannot be Empty.\n")
        return
    else:
        post = {
            "author":user,
            "title":post_title,
            "desc":post_desc,
            "date":datetime.now().strftime("%Y-%m-%d")
        }
        posts_data.append(post)
        print("Post Created Successfully.\n")

def view_post():
    if not posts_data:
        print("No Posts Availabel.\n")
        return
    
    print("-----Post Data----\n")
    for index,post in enumerate(posts_data,start=1):
        print(f"""
        Post #{index}
        Author : {post['author']}
        Title : {post['title']}
        Date : {post['date']}
        Desc : {post['desc']}
        

 -----------------------------""")

def search_post():
    username = input("Enter Username: ").strip()

    is_present = False
    for post in posts_data:
        if post['author'] == username :
            if not is_present:
                print(f"Post By {username}:")
                is_present = True
                print(f"""
Title       : {post['title']}
Date        : {post['date']}
Description : {post['description']}
--------------------------
""")
    if not is_present:
        print("No posts found for this user.\n")

def menu():
    print("welcome to PostBoard")   
    user = register()

    while True:
        print("""
1. Create Post
2. View All Posts
3. Search Posts by Username
4. Exit
""")
        choice = input("Choose an option: ").strip()

        if choice == "1":
            posts(user)
        elif choice == "2":
            view_post()
        elif choice == "3":
            search_post()
        elif choice == "4":
            print("Thank For Using Our Tool.\n")
            break
        else:
            print("Invalid Choice, Try Again.\n")

menu()          