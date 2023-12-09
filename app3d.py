from flask import Flask, render_template, request

app3d = Flask(__name__)

@app3d.route("/")
def home():
    return render_template("base.html")
