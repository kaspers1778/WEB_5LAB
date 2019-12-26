function paintCell(obj){
    var numberOfCell = document.getElementById('cell').value
    var color = document.getElementById('color').value

    document.getElementById(numberOfCell).style.backgroundColor = color
    console.log(numberOfCell," ",color)
}
var totalPrice = 0
function getPrice(obj){
    var thing = document.getElementById('shop').value
    var price = Number(thing.split('-')[1])
    totalPrice+= price
    document.getElementById('price').value = totalPrice
    document.getElementById('toBuy').append(thing + '\r\n')
    console.log(thing)
}
