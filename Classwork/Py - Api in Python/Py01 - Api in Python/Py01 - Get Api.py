import requests

def get_stock_data():
    url = "https://jsonplaceholder.typicode.com/posts"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json() # Conver in Dictionary
        print(data)
    else:
        return None
    
get_stock_data()