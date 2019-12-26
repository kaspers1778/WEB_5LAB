function chan(obj) {
    var r1 = Number(obj.a1.value)
    var r2 = Number(obj.a2.value)
    if ((r1 < 1) || (r1 > 3) || (r2 < 1) || (r2 > 3)) 
    alert("Неправильно задані номери зображень!")
    else {
        var z = document.images[r1 - 1].src
        document.images[r1 - 1].src = document.images[r2 - 1].src;
        document.images[r2 - 1].src = z
    }
}
function setImage(obj){
    document.pic4.src = obj.src
}
function loopImage(obj){
    obj.width = obj.width*2
    console.log(obj.name , "is focused")
}
function unloopImage(obj){
    obj.width = obj.width/2
    console.log(obj.name , "is unfocused")
}
function focusOnMenu(obj){
    console.log("Looped " + obj.src)
    obj.src = "F" + obj.name + ".png"
}
function unfocusOnMenu(obj){
    console.log("Looped " + obj.src)
    obj.src = obj.name + ".png"
}