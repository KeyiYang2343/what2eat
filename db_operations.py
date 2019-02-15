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

def fake_get_menus():
	with open('fake_menu_db.json', 'r') as f:
		res = json.load(f)
	for i in range(len(res)):
		materials = []
		for k,v in res[i]['materials']:
			materials.append({'name': k, 'amount': v})
		res[i]['materials'] = materials
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
		list of dict
	'''
	materials = fake_read_materials()
	res = []
	for k,v in materials.items():
		res.append({'name': k, 'amount': v})
	return res


def fake_modify_materials(data):
	'''
	args:
		dict, {str: int}. negative int for consuming; positive for adding.
	return:
		str, task status
	'''
	try:
		current_materials = fake_read_materials()
		for material in data:
			if material['name'] in current_materials.keys():
				print(current_materials)
				current_materials[material['name']] = current_materials[material['name']]+int(material['amount'])
			else:
				current_materials[material['name']] = int(material['amount'])
		fake_write_to_materials(current_materials)
		return 'success'
	except:
		return 'failed'


