# face-recognition
## App features 
- user can sigin or signup 
- when you sign up you can check if your password is strong enough 

when you signin
you can do:

- image face detection
- video face detection

### Image face detection
-you can  enter a url of image and the image with the face detection appears

-the application will count how many face detection you made( it count the number of images you entered )


### for test you can enter :

-email : d@d.com

-password:123

 -example for image urls:

#### many faces:

https://samples.clarifai.com/face-det.jpg

#### one face:

https://scstylecaster.files.wordpress.com/2016/12/model-curly-hair-nose-ring.jpg

https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg


note : in each stages there is checks for valid operation

### Video face detection
-enable your camera and it will detect your face in live!

*please wait couple seconds for the camera to focuses on your face

##  API using for the face detection
### images
- using clarifai website- gives API  for images and video data analysis 
- they use machine learning to train Models  given the Models many picture 
-we will use there face recognition API :</br>
https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection

### video:
- using  face-api.js github repository
- react-webcam

## App implementation

-client : react js ( deployment with github)

-server: python ( deployment with heroku)

-DB: postgresql ( deployment with heroku)









