function myTrans(){
    var string = document.getElementById('sente').value;
    string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
        });
        document.getElementById("sente").value="";
        document.getElementById("disBox").innerHTML = string;
}

function reverse() {
    var strRev = "";
    var string = document.getElementById("string").value;
    for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
    }
    document.getElementById("string").value="";
    document.getElementById('dosBox').innerHTML=strRev;
    }