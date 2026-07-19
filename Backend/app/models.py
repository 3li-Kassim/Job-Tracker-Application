from app.extensions import db,login_manager
from flask_login import UserMixin


class User(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(80), unique = True, nullable = False)
    email = db.Column(db.String(120), unique = True , nullable = False)
    password = db.Column(db.String(240), unique = False, nullable = False)


class JobApplication(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"))
    company = db.Column(db.String(40), unique = False, nullable = False)
    role = db.Column(db.String(60), unique = False, nullable= False)
    location = db.Column(db.String(80) , unique=False, nullable = False)
    job_link = db.Column(db.String(140), unique= False, nullable = True)
    date_applied =db.Column(db.Date)
    feedback_date = db.Column(db.Date)
    status = db.Column(db.String(40), nullable= False)
    result = db.Column(db.String(40), nullable=False)






@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)    
