from flask import Flask, request, abort, session, redirect, url_for
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from flask_jsonpify import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

#from werkzeug import generate_password_hash, check_password_hash, secure_filename

import datetime
import time
import json
import numpy as np
import os

app = Flask(__name__)
api = Api(app)

app.config.from_object('config')
app.secret_key = os.urandom(12)

CORS(app)

@app.route('/available_materials/', methods=['GET'])
def index():
	import db_operations
	available_materials = db_operations.fake_get_available_materials()
	return jsonify(available_materials)

@app.route('/add_new/', methods=['POST'])
def add_material():
	import db_operations
	data = json.loads(request.data)
	print(data)
	res_code = db_operations.fake_modify_materials(data)
	if res_code=='success':
		return redirect(url_for('index'))
	else:
		abort(400)

@app.route('/menus/', methods=['GET'])
def get_menus():
	import db_operations
	menus = db_operations.fake_get_menus()
	return jsonify(menus)

if __name__ == '__main__':
     app.run(port=8003)