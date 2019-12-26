function maxval(obj) {
    var a = Number(obj.num1.value);
    var b = Number(obj.num2.value);
    var c = Number(obj.num3.value);
    var m = a
    if (b > m) m = b
    if (c > m) m = c 
    obj.res.value = m
}
function maxOf5(obj){
    var arr = obj.numbers.value.split(" ")
    m = Math.max.apply(Math,arr)
    return m
}
function checkTriangle(obj){
    a = obj.first.value
    b = obj.second.value
    c = obj.third.value
    var ifTriangleIsCorrect = "Так"
    if ((a > Math.sqrt(b*b + c*c)) || (b > Math.sqrt(a*a + c*c)) || (c > Math.sqrt(a*a + b*b)))
    ifTriangleIsCorrect = "Ні"
    return ifTriangleIsCorrect
}
function getQuater(obj){
    x = obj.x.value
    y = obj.y.value
    var quater
    if(x > 0 && y > 0)
    quater = 1 
    else if (x < 0 && y > 0)
    quater = 2
    else if (x > 0 && y < 0)
    quater = 4
    else if (x < 0 && y < 0)
    quater = 3
    else if (x == 0 && y != 0)
    quater = "На прямій ординат"
    else if (y == 0 && x != 0)
    quater = "На прямій абсцис"
    else
    quater = "Так це ж початок координат,(0;0) ну"
    
    return quater
}