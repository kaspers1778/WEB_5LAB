function countWords(obj){
    var text = obj.text.value
    var textArr = text.split(" ")
    var num = 0
    for(var i = 0;i <textArr.length;i++){
        if(textArr[i]!='')
        num++
    }
    obj.sol1.value = num 
}
function changeWord(obj){
    var text = obj.text.value
    var word1 = obj.word1.value
    var word2 = obj.word2.value
    
    var arrText = text.split(" ")
    var numberOfWords1 = 0

    for(var i = 0;i<arrText.length;i++){
        if(arrText[i] == word1)
        numberOfWords1++;
    }

    for(var j = numberOfWords1;j>0;j--)
    text = text.replace(word1,word2)

    obj.sol2.value = text
}
function changeSpaces(obj){
    var text = obj.text.value
    text = text.replace(/\s\s+/g, ' ')
    obj.sol3.value = text
}