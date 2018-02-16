# app/views.py

from flask import render_template, make_response, request

from app import app

@app.route('/')
def connexion():
    return render_template("connexion.html")

@app.route('/tableauDeBord', methods=['GET','POST'])
def tableauDeBord ():
        return render_template("tableauDeBord.html")

@app.route('/ddd')
def profile ():
    return render_template("profile.html")

@app.route('/dddd')
def activite ():
    return render_template("activite.html")