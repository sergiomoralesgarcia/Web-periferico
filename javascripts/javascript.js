function myFunction() {
    var x = document.getElementById("navegacion");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}