from flask import Flask, jsonify
from database import database
app = Flask(__name__)

@app.route("/")
def hello():
    print(database.collection_names())
    return jsonify({"hello": "there"})
