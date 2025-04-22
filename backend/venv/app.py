from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from extension import db
from model import User

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5174"]}})

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Pregnify.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return "Welcome to Pregnify!"

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required.'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Username already exists.'}), 409

    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully.'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.password == password:
        return jsonify({'message': 'Login successful.'}), 200
    else:
        return jsonify({'error': 'Invalid username or password.'}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        print("✅ Tables created successfully!")
    app.run(debug=True)