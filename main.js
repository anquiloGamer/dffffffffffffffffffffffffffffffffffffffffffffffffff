var reconocedorVoz = window.webkitSpeechRecognition;
var reconocedor = new reconocedorVoz();
var Texbox = document.getElementById("textbox");

function start()
{

    document.getElementById("microfono").src="speak.gif"
    document.getElementById("textbox").innerHTML = "";
    reconocedor.start();
    setTimeout(function()
    {
        document.getElementById("microfono").src="mic.png";

    }, 4000);
}