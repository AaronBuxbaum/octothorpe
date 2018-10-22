from flask import Flask, jsonify
from flask_cors import CORS
# from database import database
from sklearn import datasets

app = Flask(__name__)
WEB_URL = "http://localhost:3000"
cors = CORS(app, resources={r"/*": {"origins": WEB_URL}})

@app.route("/")
def hello():
    iris = datasets.load_iris()
    digits = datasets.load_digits()
    return jsonify({"hello": "there"})

if __name__ == "__main__":
        app.run(host="0.0.0.0", debug=True, port=5000)