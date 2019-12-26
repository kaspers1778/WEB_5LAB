function checkName(obj){
    name = obj.name.value
    if(/\d/.test(name))
    alert('Введіть коректне ім`я')
}
function checkEmail(obj){
    email = obj.email.value.split('@')
    if(email.length != 2)
    alert('Введіть коректний email')
}
function checkNumber(obj){
    number = obj.number.value
    var isOk = true
    if(number[0] != '+' || number.length!=13)
    isOk = false
    for(var i = 1;i<number.length;i++){
        if(!/\d/.test(number[i]))
        isOk = false
    }
    if(!isOk)
    alert('Введіть коректний номер')
    console.log(number[0])
}
