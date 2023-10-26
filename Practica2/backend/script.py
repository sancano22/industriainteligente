import os
import json

i=0
archivo=open("../datos/AmazonData.csv")
Ldatos=[]
for linea in archivo:
    if i>0:
        datos=linea.split(",")
        objeto={"title":datos[0],
               "descripcion":datos[1],
               "autor":datos[2],
               "isbn10":datos[3],
               "isbn13":datos[4],
               "publish_date":datos[5],
               "edition,best_seller":datos[6]
               }
        Ldatos.append(objeto)
        print(objeto)
    i=i+1
  
jsonString = json.dumps(Ldatos)
jsonFile = open("../data.json", "w")
jsonFile.write(jsonString)
jsonFile.close()