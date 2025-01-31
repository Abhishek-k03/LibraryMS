from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)
load_dotenv()

MONGO_URI = os.getenv('MONGO_URI')

# Create MongoDB client and connect to Atlas
client = MongoClient(MONGO_URI, server_api=ServerApi('1'))

# Create or get the 'library' database
db = client['library']  # This creates the 'library' database if it doesn't exist

# Create or get the 'books' collection
books_collection = db['books']  # This creates the 'books' collection if it doesn't exist

# Route to display form
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle form submission
@app.route('/add_book', methods=['POST'])
def add_book():
    if request.method == 'POST':
        bookid = request.form['bookid']
        name = request.form['name']
        counts = request.form['counts']
        author = request.form['author']
        
        # Insert the new book data into the 'books' collection
        books_collection.insert_one({
            'bookid': bookid, 
            'name': name, 
            'counts': int(counts), 
            'author': author
        })
        
        return redirect(url_for('index'))
    
    return render_template('index.html')

@app.route('/api/books', methods=['GET'])
def get_books():
    books = books_collection.find()
    books_list = []
    for book in books:
        book['_id'] = str(book['_id'])  # Convert ObjectId to string
        books_list.append(book)

    return jsonify(books_list)

if __name__ == '__main__':
    app.run(debug=True)
