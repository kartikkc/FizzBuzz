var array = new Array();

function Okay() {
    
    
    var y = document.getElementById('number').value;
    
    console.log(y);

    array.push(y);
    
    var x = array.length;

    console.log(x);

    var i = 0;
    for( i = 0; i<x ; i++){
        console.log(array[i]);
    }

}