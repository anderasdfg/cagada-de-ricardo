function Sound(surl) {
    document.getElementById("SateSateSate").innerHTML= "<embed src=\""+surl+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />"
}

function OtakoName(){
    var name = (document.getElementById("fname").value).split('')
    var lastname = (document.getElementById("lname").value).split('')

    var nameOtako = "", lastNameOtako = "", nameComplete = name + " " + lastname

    if(nameComplete.trim().length == 0){
        document.getElementById("OtakoSan").innerHTML = "Colombo San"
    }else{ document.getElementById("OtakoSan").innerHTML =  CorrectName(OtakoSan(nameComplete)) + " San"}

    for(let i = 0; i < name.length; i++){
        nameOtako += TranslateOtako(name[i])
    }

    for(let i = 0; i < lastname.length; i++){
        lastNameOtako += TranslateOtako(lastname[i])
    }

    nameComplete = nameOtako + " " + lastNameOtako
    nameComplete = CorrectName(nameComplete)

    document.getElementById("ResultadoOtako").style.opacity = 1
    document.getElementById("ResultadoOtako").style.visibility = 'visible'

    if(nameComplete.trim().length == 0){
        document.getElementById("ConversionOtako").innerHTML = "Colombodiodas"
    }else{ document.getElementById("ConversionOtako").innerHTML = nameComplete }
    
    
}

function TranslateOtako(letter){
    switch(letter.toLowerCase()){
        case "a": letter = "ka"; break
        case "b": letter = "tu"; break
        case "c": letter = "mi"; break
        case "d": letter = "te"; break
        case "e": letter = "ku"; break
        case "f": letter = "lu"; break
        case "g": letter = "ji"; break
        case "h": letter = "ri"; break
        case "i": letter = "ki"; break
        case "j": letter = "zu"; break
        case "k": letter = "me"; break
        case "l": letter = "ta"; break
        case "m": letter = "rin"; break
        case "n": case "ñ": letter = "to"; break
        case "o": letter = "mo"; break
        case "p": letter = "no"; break
        case "q": letter = "ke"; break
        case "r": letter = "shi"; break
        case "s": letter = "ari"; break
        case "t": letter = "chi"; break
        case "u": letter = "do"; break
        case "v": letter = "ru"; break
        case "w": letter = "mei"; break
        case "x": letter = "na"; break
        case "y": letter = "fu"; break
        case "z": letter = "ra"; break
        default: " "; break
    }
    return letter
}

function CorrectName(name){
    name = name.split(" ")
    let nameCorrect = ""

    for(let i = 0; i < name.length; i++){
        nameCorrect += (name[i].substring(0,1)).toUpperCase() + name[i].substring(1) + " "
    }
    
    return nameCorrect.trim()
}

function CloseModal(){
    document.getElementById("ResultadoOtako").style.opacity = 0;
    document.getElementById("ResultadoOtako").style.visibility = 'hidden'
}

function CopyToClippboard(){
    var codigoACopiar = document.getElementById('ConversionOtako').textContent + ", " +  document.getElementById('OtakoSan').textContent 
    /*var seleccion = document.createRange()
    seleccion.selectNodeContents(codigoACopiar)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(seleccion)
    var res = document.execCommand('copy')
    window.getSelection().removeRange(seleccion)*/
    var aux = document.createElement("input");
    aux.setAttribute("value",codigoACopiar);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function OtakoSan(name){
    name = name.split(" ")
    let nameCorrect = ""

    for(let i = 0; i < name.length; i++){
        nameCorrect += TranslateOtako(name[i].substring(0,1))
    }
    
    return nameCorrect.replace(","," ").trim()
}

//https://www.youtube.com/watch?v=-Jk_94YqGJE
//https://www.youtube.com/watch?v=8mDEnaHaIDw
//