from app.extensions import db, bcrypt
from flask import request,make_response,jsonify
from app.auth import auth
from app.models import User
from flask_login import login_user,logout_user,login_required, current_user


@auth.route("/register", methods=['POST'])
def register():
    if request.method == "POST":
        data = request.get_json(silent=True)
        username = data["username"]
        email = data["email"]
        password = data["password"]
        existing_user = User.query.filter_by(email = email).first()
        if not existing_user:
            password = bcrypt.generate_password_hash(password).decode("utf-8")
            user = User(username= username, email = email, password= password)
            db.session.add(user)
            db.session.commit()
            return make_response("",200)
        else:
            return make_response("",409)



@auth.route("/login", methods=['POST'])
def login():
    if request.method =="POST":
        data= request.get_json(silent=True)
        email = data["email"]
        password = data["password"]
        if not email or not password:
            return make_response("",400)
        else:
            user = User.query.filter_by(email=email).first()
            if user:
                if bcrypt.check_password_hash(user.password,password):
                    login_user(user)
                    return make_response("",200)
                else:
                    return make_response("",401)
            else:
                return make_response("",404) 

@auth.route("/current_user", methods=["GET"])
def get_current_user():
    if current_user.is_authenticated:
        return jsonify({"loggedIn" : True, "username": current_user.username}),200
    else:
        return jsonify({"loggedIn": False}),200

@auth.route("/logout")
@login_required
def logout():
    logout_user()
    return make_response("",200)         






