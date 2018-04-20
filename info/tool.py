# -*- coding: utf-8 -*-
# tool.py

txtFile = open('card.txt', 'r')
infoFile = open('sql.txt', 'w')

txtArray = txtFile.read().split(',')

sqlTxt = 'INSERT INTO card (name, score, description, version) VALUES\n'
contentTxt = ''


for txt in txtArray:
    newTxt  = txt.split(':')[1].split('\'')[1].split('.png')[0]
    if '-hd' in newTxt:
        newTxt = newTxt.split('-hd')[0]
    content = '("' + newTxt + '", 50, "", "WITCHWOOD"),\n'
    contentTxt = contentTxt + content
    
infoFile.write(sqlTxt + contentTxt + '\n')
    

txtFile.close()