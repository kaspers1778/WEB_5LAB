function getPrice(obj){
    var coursesCB = document.getElementsByName('course')
    var periodsCB = document.getElementsByName('period')
    var languagesCB = document.getElementsByName('language')
    var studyCB = document.getElementsByName('study')
    var price = 0;
    var numberOfCourses = 0;
    for(var i = 0;i<3;i++){
        if(coursesCB[i].checked)
        price+= Number(coursesCB[i].value)
        if(periodsCB[i].checked)
        price+= Number(periodsCB[i].value) 
        if(languagesCB[i].checked)
        price+= Number(languagesCB[i].value) 
        if(studyCB[i].checked)
        price+= Number(studyCB[i].value) 
    }
    obj.output.value = "Загальна вартість складає " + price+" грн"
    console.log(price)
}