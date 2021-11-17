var i = 0;
var t = 70;
var str = "Hello, I am Richard, a Computer Science Grad! Take a look at my projects below!"

function type() {
    if (i < str.length) {
        document.getElementById("intro").innerHTML += str.charAt(i++);
        setTimeout(type, t);
    }
}