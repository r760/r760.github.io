var i = 0;
var t = 70;
var str = "Hello, I am Richard, I am a Computer Programmer and a Computer Science Grad! Take a look at my projects below!"

function type() {
    if (i < str.length) {
        document.getElementById("intro").innerHTML += str.charAt(i++);
        setTimeout(type, t);
    }
}
