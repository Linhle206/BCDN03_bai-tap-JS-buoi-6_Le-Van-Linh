function count() {
    var x = document.getElementById("inputX").value;
    var n = document.getElementById("inputN").value;
    var s = 0;

    for ( var i = 1; i <= n; i++) {
        s += Math.pow(x, i);
    }
    document.querySelector(".b2 p").innerHTML = "S(" + n + ") = " + s;
}