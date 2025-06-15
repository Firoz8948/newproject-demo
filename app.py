# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return render_template('index.html')
#     # return "<p>Hello, World!</p>"

# @app.route("/contact")
# def contact():
#     return "thanx for contacting us"

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>this is second basic code</p?"

@app.route("/contact")
def contact():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)