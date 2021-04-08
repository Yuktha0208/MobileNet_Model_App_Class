Webcam.set({
    width:310,
    height:300,
    image_format: "png",
    png_quality: 90,

    constraints:{
        facingMode: "envoirment"
    }


});

cam= document.getElementById("cam");

Webcam.attach(cam);

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='" + data_uri + "'>";
    }); 
}

console.log("ml5 version", ml5.version);

classifier= ml5.imageClassifier("Mobilenet", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check_snap(){
    img= document.getElementById("capture_img");
    classifier.classify(img,gotResult);
}

function gotResult( error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Object_Name").innerHTML=results[0].label;
    }
}