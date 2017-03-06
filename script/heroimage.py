import json
import os.path
import requests
import shutil

with open(os.path.dirname(__file__) + '../testing.txt') as data_file:
  data = json.load(data_file)

img_suffix = '_vert.jpg'
prefix = 'npc_dota_hero_'
dl_base = 'http://cdn.dota2.com/apps/dota2/images/heroes/'

for i in data['result']['heroes']:
  parsed_name = i['name'][len(prefix):]
  request_str = dl_base + parsed_name + img_suffix

  r = requests.get(request_str, stream=True)
  img_path = os.path.join(os.path.dirname(__file__) + '../static', parsed_name + '.jpg')
  with open(img_path, 'wb') as f:
    shutil.copyfileobj(r.raw, f)