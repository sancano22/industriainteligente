import cv2
import numpy as np
from matplotlib import pyplot as plt
import json
from skimage import exposure

#python -m pip install -U scikit-image

ruta="datos/images/"
nombre=ruta+"0.png"

def equalization(img):
    hist, bins = exposure.histogram(image, nbins=256, normalize=False)
    print(hist.shape)
    print(bins.shape)
    # append any remaining 0 values to the histogram
    hist = np.hstack((hist, np.zeros((255 - bins[-1])))) 
    cdf = 255*(hist/hist.sum()).cumsum()
    equalized = cdf[image].astype(np.uint8)

    return np.array([hist,bins])

if __name__ == '__main__':
    # generate some test data with shape 1000, 1, 96, 96
    img = cv2.imread(nombre)
    # loop over them
    hist, bins = exposure.histogram(img[:,:,0], nbins=256, normalize=False)
    #objeto={"histogramaR":data_equalized[:,:,0].tolist()}
    objeto={"histogramaR":{"bins":bins.tolist(),"hist":hist.tolist()}}

#print(objeto)

jsonString = json.dumps(objeto)
jsonFile = open("histograma.json", "w")
jsonFile.write(jsonString)
jsonFile.close()

