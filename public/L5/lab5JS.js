var dataInfo = " "
function collectData(obj){
    var sexRB = document.getElementsByName('sex');
    for(var i = 0;i<sexRB.length;i++){
        if(sexRB[i].checked){
        var sex
        if(sexRB[i].value=="Інше")
        sex = obj.other.value
        else
        sex = sexRB[i].value
        }
    }
    var age = obj.howOld.value
    var familyRB = obj.family
    for(var j = 0;j<familyRB.length;j++){
        if(familyRB[j].checked)
        var family = familyRB[j].value
    }
    console.log(sex," ",age," ",family)
    dataInfo +=  sex + " " + age + " " + family + "<br>"
    var dataDiv = document.getElementById('data')
    dataDiv.innerHTML = dataInfo
}
function changeHR(obj){
    hr = document.getElementById('hr')
    hr.size = obj.size.value
    hr.width = obj.width.value
    alignBR = document.getElementsByName('align')
    for(var i = 0;i<2;i++){
        if(alignBR[i].checked)
        var align = alignBR[i].value
    }
    hr.align = align
}