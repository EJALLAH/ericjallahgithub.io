function showMessage() {
    // Grabs the value from the input field
    let name = document.getElementById("nameInput").value;

    // Checks if the user actually typed something
    if (name === "") {
        document.getElementById("welcomeText").innerHTML =
        "Welcome! Enter your name in the box.";
    } else {
        document.getElementById("welcomeText").innerHTML =
        "Welcome " + name + "! Thanks for visiting our pizza palace.";
    }
}