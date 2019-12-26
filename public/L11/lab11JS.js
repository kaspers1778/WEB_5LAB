function mult() {
    img_array = new Array();
    for (var i = 0; i < 4; i++) img_array[i] = new Image(50, 100);
    img_array[0].src ="e1.png"
    img_array[1].src = "e2.png"
    img_array[2].src = "e3.png"
    img_array[3].src = "e4.png"
    var t = new Date() ;p = -1
}

function s() {
    p = p + 1;
    document.images[0].src = img_array[p].src;
    setTimeout("s()", 100);
    if (p == 3) p = -1
}  

function countPozitive(obj){
    var arr = obj.arr.value.split(" ")
    var tmp = 0
    for(var i = 0;i < arr.length;i++){
        if(Number(arr[i])>0)
        tmp++
    }
    obj.sol1.value = tmp
}
function getMax(obj){
    var arr = obj.arr.value.split(" ")
    arr.sort()
    obj.sol2.value = arr[arr.length - 1]
}