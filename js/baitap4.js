function createDiv() {
    for (var i = 1; i <= 10; i++ ) {
        if(i%2 == 0) {
            var odd = document.createElement("div");
            odd.className = "odd";
            document.getElementById("bg").appendChild(odd);
        } 
        else {
            var even = document.createElement("div");
            even.className = "even";
            document.getElementById("bg").appendChild(even);
        }
    }

} 