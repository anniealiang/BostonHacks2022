from flask import Flask, request
from flask_cors import CORS #pip install
#flask cor will help identify the data from the backend to the frontend
app = Flask(__name__)
CORS(app)
@app.route("/")

def test():
    return "Hello Kit"

if __name__ == "__main__":
    app.run(debug=True)

#