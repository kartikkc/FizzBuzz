var array = new Array();

function Okay() {


    var y = document.getElementById('number').value;

    console.log(y);

    array.push(y);
    if (y == 15012002 || y ==10092002 ) {
        window.alert("You are my Homie!!❤️‍🔥\nStay same Nigga?🥺👻")
        console.log("You are my Homie!!❤️‍🔥\nStay same Nigga?🥺👻");
    }
    else {
        if (y % 3 == 0) {
            if (y % 5 == 0) {
                document.getElementById("main-result").innerHTML = "FizzBuzz";
                // console.log("FizzBuzz");
            }
            else {
                document.getElementById("main-result").innerHTML = "Fizz";
                // console.log("Fizz");
            }
        }
        else if (y % 5 == 0) {
            //    document.getElementById().innerHTML="Buzz";
            if (y % 3 == 0) {
                document.getElementById("main-result").innerHTML = "BuzzFizz";
                // console.log("BuzzFizz");
            }
            else {
                document.getElementById("main-result").innerHTML = "Buzz";
                // console.log("Buzz");
            }
        }
        else {
            document.getElementById("main-result").innerHTML = y;
            // console.log("Any Number!!");
        }
    }
    var x = array.length;

    console.log(x);

    // var i = 0;
    // for (i = 0; i < x; i++) {
    //     console.log(array[i]);
    // }

}
