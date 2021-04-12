prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innnerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json",modelLoaded);
function  modelLoaded(){
    console.log("model loaded");
}
