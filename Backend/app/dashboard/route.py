from flask import request,make_response,jsonify
from app.extensions import db
from flask_login import current_user
from app.dashboard import dash
from flask_login import login_required
from app.models import JobApplication



@dash.route("/jobs", methods=["GET","POST"])
@login_required
def job_handler():
    if request.method =="POST":
        data = request.get_json(silent = True)
        company = data["company"]
        role = data["role"]
        location = data["location"]
        job_link = data["jobLink"]
        status = data["status"]
        result = data["result"]
        date_applied =data["dateApplied"]
        feedback_date = data["feedbackDate"]
        
        job_app = JobApplication(company = company, role = role, location = location, job_link = job_link, status = status, result=result, date_applied = date_applied, feedback_date = feedback_date , user_id = current_user.id)
        db.session.add(job_app)
        db.session.commit()
        return make_response("",200)
    user_jobs = JobApplication.query.filter_by(user_id =current_user.id).all()
    result = [{"company": job.company, "role": job.role, "location": job.location, "job_link": job.job_link, "status": job.status, "result": job.result, "date_applied": job.date_applied, "feedback_date": job.feedback_date} for job in user_jobs]
    return jsonify(result),200