from flask import Blueprint

dash = Blueprint("dash", __name__, url_prefix="/api")

from app.dashboard import route