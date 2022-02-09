function myTrans(){
    var string = document.getElementById('sente').value();
    string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
    });
    document.getElementById('disBox').innerHTML= string;
}
