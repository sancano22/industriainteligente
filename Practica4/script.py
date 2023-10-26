#import matplotlib.pyplot as plt
#import matplotlib.image as mpimg
import cv2
import numpy as np

ruta="datos/images/"
nombre=ruta+"0.png"

# read an image
img = cv2.imread(nombre)

red_channel = img[:,:,0]
#BGR
imagen_red = np.zeros(img.shape, dtype=np.uint8)
imagen_red[:,:,0]=img[:,:,0]
imagen_verde = np.zeros(img.shape, dtype=np.uint8)
imagen_verde[:,:,1]=img[:,:,1]
imagen_azul = np.zeros(img.shape, dtype=np.uint8)
imagen_azul[:,:,2]=img[:,:,2]

cv2.imwrite('R-RGB.jpg',cv2.cvtColor(imagen_red,cv2.COLOR_RGB2BGR))
cv2.imwrite('G-RGB.jpg',cv2.cvtColor(imagen_verde,cv2.COLOR_RGB2BGR))
cv2.imwrite('B-RGB.jpg',cv2.cvtColor(imagen_azul,cv2.COLOR_RGB2BGR))

#resize
new_image=cv2.resize(img,(500,500))

#print(new_image)
cv2.imwrite('new_image.jpg',new_image)

#cv2.waitKey(0)