from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Data buku
books = [
    {"title": "I Have No Mouth, and I Must Scream", "author": "Harlan Ellison"},
    {"title": "Blood Meridian", "author": "Cormac McCarthy"},
    {"title": "No Longer Human", "author": "Osamu Dazai"},
    {"title": "All Tomorrows", "author": "C.M. Kosemen"},
]

@app.route("/")
def index():
    return jsonify(books)

if __name__ == '__main__':
    app.run(port=9000, debug=True)
