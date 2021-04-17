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
function  speak(){
    var synth=window.speechSynthesis;
    speakdata1='the 1st prediction is'+prediction1;
    speakdata2='and the 2ns prediction is '+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);

}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);

}
function gotresult(error,result){
    if(error){
        console.error(error);
    }
else{
    prediction1=result[0].label;
    prediction2=result[1].label;
    document.getElementById("result_emotion_name").innerHTML=prediction1
    document.getElementById("result_emotion_name2").innerHTML=prediction2;
speak();
if(result[0].label=="happy"){
document.getElementById("update_emoji").innerHTML="&#128522;"

}
if(result[0].label=="sad"){
    document.getElementById("update_emoji").innerHTML="&#128532;"
    }
    if(result[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML="&#128548;"
        }
        if(result[1].label=="happy"){
            document.getElementById("update_emoji").innerHTML="&#128522;"
            }
            if(result[1].label=="sad"){
                document.getElementById("update_emoji").innerHTML="&#128532;"
                }
                if(result[1].label=="angry"){
                    document.getElementById("update_emoji").innerHTML="&#128548;"
                    }
        }
}
