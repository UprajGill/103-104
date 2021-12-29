Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:96
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captureimage"src="'+data_uri+'"/>';
    });
    }
    console.log('ml5version',ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NV0ImxzEM/",modelLoaded);
    function modelLoaded(){
        console.log('modelLoaded');
    }