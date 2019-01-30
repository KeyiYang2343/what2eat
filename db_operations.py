from https import app
import os
import json


def fake_read_materials():
	'''
	read from database
	'''
	with open(app.config.get('FAKE_DB_PATH'), 'r') as f:
		res = json.load(f)
	return res

def fake_write_to_materials(new_materials):
	'''
	append new data to database
	'''
	with open(app.config.get('FAKE_DB_PATH'), 'w') as f:
		json.dump(new_materials, f, indent=4)
	return

def fake_get_available_materials():
	'''
	return:
		dict
	'''
	return fake_read_materials()


def fake_modify_materials(data):
	'''
	args:
		dict, {str: int}. negative int for consuming; positive for adding.
	return:
		str, task status
	'''
	try:
		current_materials = fake_read_materials()
		for material in data.keys():
			if material in current_materials.keys():
				current_materials[material] = current_materials[material]+data[material]
			else:
				current_materials[material] = data[material]
		fake_write_to_materials(current_materials)
		return 'success'
	except:
		return 'failed'


