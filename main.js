//https://teachablemachine.withgoogle.com/models/Ee0Y5cwJ0/
meaning="";
emoji="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
png_quality:100
});

webcam=document.getElementById("webcam");

Webcam.attach('#webcam');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ee0Y5cwJ0/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_meaning="The meaning of hand gesture Is"+meaning;
    speak_emoji="The emoji for hand gesture Is"+emoji;
    var utterThis=new SpeechSynthesisUtterance(speak_meaning+speak_emoji);
    synth.speak(utterThis);

}