Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");



function capture(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9dOiw-F5a/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model has been loaded");
}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
        
    }

    else{
        console.log(results);
        document.getElementById("result_human_name").innerHTML=results[0].label;
        document.getElementById("result_human_accurracy").innerHTML=results[0].toFixed(2)*100+"%";
    }
}