var pirveli = prompt("პირველი რიცხვი: ");
var meore = prompt("მეორე რიცხვი: ");
var mesame = prompt("მესამე რიცხვი: ");

var numbers = [];

function minimal (pirveli1,meore2,mesame3){
    var pirveli1 = pirveli;
    var meore2 = meore;
    var mesame3 = mesame;

    var result = pirveli1;

    if (meore2 < result) result = meore2;
    if (mesame3 < result) result = mesame3;
    return result;    
}


document.write(minimal());