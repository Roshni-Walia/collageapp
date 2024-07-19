var speechrecognition= window.webkitSpeechRecognition;
var recognition = new speechrecognition()

function start() {
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    content = event.results[0][0].transcript 
    document.getElementById("textbox").innerHTML=content
    if (content=="take my selfie") {
        speak() ; 
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    camera = document.getElementById("camera")
Webcam.attach(camera)
setTimeout(function()
{
    take_snapshot();
    save();
}, 5000);
}
Webcam.set({
    width:360 , 
    height: 260  ,
    img_format:"png" ,
    png_quality:90
})


function take_snapshot() {
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML='<img id ="selfie_image" src="'+data_uri+'">';
    });
}

function save() {
    link= document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}



