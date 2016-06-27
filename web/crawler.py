# -*- coding: utf-8 -*-
import urllib
import json
import codecs
from bs4 import BeautifulSoup


def str_to_int(s):
    """
    字符串转数字 '12.155ok' -> 12.155
    :param s: str
    :return: int
    """
    return int(float(''.join([j for j in s if 48 <= ord(j) <= 57 or j == '.'])) * 10000)

response = urllib.urlopen('http://edu.sina.com.cn/gaokao/2015bm/')
html = response.read().decode('gb2312')
soup = BeautifulSoup(html)
person_2015 = [i.find_all('td', limit=2) for i in soup.find_all('tr')]

_in = codecs.open('pro_change.json', 'r', 'utf-8')
pro_change_dic = json.load(_in)

last_data = []
easy_data = []

for data in person_2015:
    _province = data[0].string
    _province_id = pro_change_dic[_province]
    _raw_person_data = data[1].strings.next()
    if u'万' in _raw_person_data:
        _person = str(str_to_int(_raw_person_data))
    else:
        _person = _raw_person_data
    last_data.append((_province_id, _province, _raw_person_data, _person))
    easy_data.append({'hc-key': _province_id, 'value': _person})
easy_data.remove({u"value": u"2015年", u"hc-key": u"省/市"})

# out = codecs.open('person_number.json', 'w', 'utf-8')
# json.dump(last_data, out, ensure_ascii=False, indent=4)

out = codecs.open('data.json', 'w', 'utf-8')
json.dump(easy_data, out, ensure_ascii=False, indent=4)

