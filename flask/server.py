from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import sys
# from database import database
from sklearn import datasets

app = Flask(__name__)
WEB_URL = "http://localhost:3000"
GRAPHQL_URL = "http://server:4000"
cors = CORS(app, resources={r"/*": {"origins": [GRAPHQL_URL, WEB_URL]}})


@app.route("/matches")
def find_matches():
    userId = request.args.get("userId")
    query = """
        query {
            user {
                hashtags {
                    id
                }
            }

            users {
                username
                firstName
                lastName
                rating
                image
                hashtags {
                    title
                }
            }
        }
    """
    request = requests.get(GRAPHQL_URL, {"query": query})
    # my_hashtags = request.json()["data"]["user"]["hashtags"]
    users = request.json()["data"]["users"]
    return jsonify(users)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
