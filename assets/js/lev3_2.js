function changeBackground() {
    let red = document.getElementById("Red").value;
    let green = document.getElementById("Green").value;
    let blue = document.getElementById("Blue").value;

    console.log("rgb(" + red + "," + green + "," + blue + ")");
    
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}