from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import hashlib

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

# Database connection
db = pymysql.connect(
    host="localhost",
    user="root",  # Replace with your MySQL username
    password="",  # Replace with your MySQL password
    database="UserDB"
)


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    # Hash the password to match hashed passwords in the database
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    cursor = db.cursor()
    cursor.execute("SELECT * FROM Usertable WHERE username=%s AND password=%s", (username, hashed_password))
    user = cursor.fetchone()

    if user:
        return jsonify({"message": "Login successful", "status": "success"})
    else:
        return jsonify({"message": "Invalid username or password", "status": "error"})


if __name__ == "__main__":
    app.run(debug=True)
