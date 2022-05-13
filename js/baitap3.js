function factorial() {
    var n = document.getElementById("IN").value;
    var f = 1;

    for (var i = 1; i <= n; i++) {
        f *= i;
    }
    document.querySelector(".b3 p").innerHTML = n + "! = " + f;
}