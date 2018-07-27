//I was going to a alert function just to meet requirements
//but decided to actually try to make something better
//I'm leaving it commented in case something terrible breaks

// function buttonPress() {
//     alert("Thank you for subscribing!");
// }

// Notification Function

function buttonPress() {
    var x = document.getElementById("notification");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
