from flask import Flask, jsonify, request, render_template
import os

from sympy import public
app = Flask(__name__, template_folder='../frontend/public')
@app.route("/")
def homepage():
    return render_template('index.html')
# register API Route
@app.route("/register")
def register():
    return jsonify({
        "userName": ["Zeyu", "Yash", "Benson", "Zach"],
        "passWord": ["123", "123", "123", "123"],
        "name": ["Zeyu", "Yash", "Benson", "Zach"],
        "age": ["24", "24", "18", "21"],
        "desiredOrgan": ["Heart", "Liver", "Lung", "Eyes"],
        "bloodTypes": ["A", "O", "B", "AB"]
    })
# donor API Route
@app.route("/donor")
def donor():
    return jsonify({
        "hospitals": ["hospital1", "hospital2", "hospital3"],
        "organTypes": ["Kidney", "Liver", "Pancrease", "Heart", "Lung", "Eyes"],
        "bloodType": ["A", "AB", "B", "O"],
    })
# matches API Route
@app.route("/matches")
def matches():
    return jsonify({
        "hospitals": ["hospital1", "hospital2", "hospital3"],
        "organTypes": ["Kidney", "Liver", "Pancrease", "Heart", "Lung", "Eyes"],
        "bloodType": ["A", "AB", "B", "O"],
        "priority": int(123)
        })

if __name__ == "__main__":
    app.run(debug=True)