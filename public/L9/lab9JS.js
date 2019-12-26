function getWeek(obj){
    var date = new Date(obj.date.value)
    var mounth = Number(date.getMonth() + 1)
    var day = Number(date.getDate())
    var week = Math.ceil(((mounth-1) * 30.5 + day)/7)
    obj.sol1.value = "Це належить до " + week + " тиждня"
    
}
function getZodiak(obj){
    var date = new Date(obj.date.value)
    var this_month = Number(date.getMonth())
    var value
        if (this_month==1 && date>=20 || this_month==2 && date<=18) value="Водолей";
        else if (this_month==2 && date>=19 || this_month==3 && date<=20) value="Рыбы";
        else if (this_month==3 && date>=21 || this_month==4 && date<=19) value="Овен";
        else if (this_month==4 && date>=20 || this_month==5 && date<=20) value="Телец";
        else if (this_month==5 && date>=21 || this_month==6 && date<=21) value="Близнецы";
        else if (this_month==6 && date>=22 || this_month==7 && date<=22) value="Рак";
        else if (this_month==7 && date>=23 || this_month==8 && date<=22) value="Лев";
        else if (this_month==8 && date>=23 || this_month==9 && date<=22) value="Дева";
        else if (this_month==9 && date>=23 || this_month==10 && date<=22) value="Весы";
        else if (this_month==10 && date>=23 || this_month==11 && date<=21) value="Скорпион";
        else if (this_month==11 && date>=22 || this_month==12 && date<=21) value="Стрелец";
        else if (this_month==12 && date>=22 || this_month==1 && date<=19) value="Козерог";
        else value="Неверная дата!";
    obj.sol2.value = value  
}
function getYear(obj){
    var date = new Date(obj.date.value)
    var year = Number(date.getFullYear())
    var numAnimal = (Math.abs(year - 1984)%12)+1
    var numColor = Math.ceil(Math.abs(year - 1984)/12)
    
    while(numColor > 5)
    numColor-=5
    var animal
    var color
    switch(numAnimal){
    case 1:
        animal = "Пацюка"
        break;
    case 2:
        animal = "Корови"
        break;
    case 3:
        animal = "Тигра"
         break;
    case 4:
        animal = "Зайця"
        break;
    case 5:
        animal = "Дракона"
        break;
    case 6:
        animal = "Змії"
         break;
    case 7:
         animal = "Коня"
         break;
    case 8:
         animal = "Вівці"
        break;
    case 9:
         animal = "Мавпи"
         break;
    case 10:
         animal = "Курки"
         break;
    case 11:
         animal = "Собаки"
         break;
    case 12:
         animal = "Свині"
         break;
    }
    
    switch(numColor){
        case 1:
            color = "зеленого/ої"
            break;
        case 1:
            color = "червоного/ої"
            break;
        case 3:
            color = "жовтого/ої"
            break;
        case 4:
            color = "білого/ої"
            break;
        case 2:
            color = "чорного/ої"
            break;
    }
    obj.sol3.value = "Це рік " + color + " " +animal
}