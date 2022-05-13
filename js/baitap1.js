function find() {
    var i = 1;
    var c = 0;
    while (c <= 10000) {
        i ++;
        c += i;
    }
    document.querySelector(".b1 p").innerHTML = "Số nguyên dương thỏa mãn điều kiện của đề bài: " + i;
}
find();