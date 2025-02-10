from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import hashlib

app = Flask(__name__)
CORS(app)  


db = pymysql.connect(
    host="localhost",
    user="root",  
    password="", 
    database="UserDB"
)


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    
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
