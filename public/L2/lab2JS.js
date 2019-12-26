function square(a, h) {
    var s = (a * h) / 2;
    return s
}
function square_rec(obj) {
    obj.sol2.value=obj.num1.value* obj.num1.value
}
function triangle(x1,y1,x2,y2,x3,y3){
    var a = Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2))
    var b = Math.sqrt(Math.pow((x2-x3),2) + Math.pow((y2-y3),2))
    var c = Math.sqrt(Math.pow((x3-x1),2) + Math.pow((y3-y1),2))
    var p = (a + b + c)/2
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    return s
}
function distance(x,y){
    var d = Math.sqrt(x*x + y*y)
    console.log("Clicked")
    return d
}
function swap(obj){
    var tmp = obj.first.value
    obj.first.value = obj.second.value
    obj.second.value = tmp
}