from flask import Flask
from config import Config
from app.extensions import db,bcrypt,login_manager
from app.auth import auth



def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)

    app.register_blueprint(auth)

    with app.app_context():
        db.create_all()

    return app
