let toggle = true;

function changeParagraph() {
    if(toggle){
        document.getElementById("firstParagraph").innerHTML = "Rich is back, just shout out if you need anything!";
        toggle = false;
    }
    else {
        document.getElementById("firstParagraph").innerHTML = "Rich is AFK (Away From Keyboard). But he will be right back! Drop a message in chat so he sees it when he returns.";
        toggle = true;
    }
}

// Comment your JavaScript like this
// function to increase the count
// variable to store the count

let count = 0;
function incrementCount() {
    // comparison operators return a true or false
    // ==, <, >, >=, <=, !=, ===
    // === vs ==
    if (count < 25){
        // count = count + 1;
        // count += 1;
        count++;
        document.getElementById("result").innerHTML = count;
    }
}
function decrementCount() {
    // ternary operators are a shorthand, 
// value to fill = (comparison) ? true : false;
    // count = (count > -25) ? (count < -15) ? count -2: count -1  : count;
    if (count > -25){
        if( count < -15){
            count -= 2;
        }
        count--;
    }
        document.getElementById("result").innerHTML = count;
}