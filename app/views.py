# app/views.py

from flask import render_template, make_response, request

from app import app

@app.route('/')
def connexion():
    return render_template("connexion.html")

@app.route('/tableauDeBord', methods=['GET','POST'])
def tableauDeBord ():
        return render_template("tableauDeBord.html")

@app.route('/profil/<user>', methods=['GET','POST'])
def profil (user):
    return render_template("profil.html")

@app.route('/activite/<id>', methods=['GET','POST'])
def activite (id):
    return render_template("activite.html")

@app.route('/athlete', methods=['GET','POST'])
def athlete ():
        return render_template("athlete.html")

@app.route('/ajoutActivite', methods=['GET','POST'])
def ajoutActivite ():
        return render_template("ajoutActivite.html")
