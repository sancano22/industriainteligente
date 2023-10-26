from flask import Flask,request, jsonify
from waitress import serve
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/',methods=['GET'])
def index():
    jsonFile = open("../data.json", "r")
    datos = (json.load(jsonFile))
    return jsonify(datos)

@app.route('/filtro')
def filtro():
    jsonFile = open("../data.json", "r")
    datos = (json.load(jsonFile))
    salida=[]
    cantidadWeb=0
    cantidadJava=0
    cantidadPython=0
    for dictionary in datos:
        if 'web' in dictionary['title'].lower():
            cantidadWeb=cantidadWeb+1
        if 'java' in dictionary['title'].lower():
            cantidadJava=cantidadJava+1
        if 'python' in dictionary['title'].lower():
            cantidadPython=cantidadPython+1
            #salida.append(dictionary)
    #return jsonify(salida)
    return jsonify({"web":cantidadWeb,"java":cantidadJava,"python":cantidadPython})


if __name__ == "__main__":
    app.run(debug=True)
    #serve(app, host="0.0.0.0", port=8080)