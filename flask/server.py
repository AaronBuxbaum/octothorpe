from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
# from sklearn import datasets

app = Flask(__name__)
WEB_URL = "http://localhost:3000"
GRAPHQL_URL = "http://server:4000"
cors = CORS(app, resources={r"/*": {"origins": [GRAPHQL_URL, WEB_URL]}})


@app.route("/matches")
def find_matches():
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
    r = requests.get(
        GRAPHQL_URL,
        params={"query": query},
        headers=request.headers
    )
    my_hashtags = r.json()["data"]["user"]["hashtags"]
    app.logger.info(my_hashtags)
    matches = r.json()["data"]["users"]
    return jsonify(matches)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
