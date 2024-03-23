/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
const welcomeText = "Welcome UTD Freshman!";
const welcomeDiv = document.getElementById("welcome-text");

function typeWriter(text, i) {
    if (i < text.length) {
        welcomeDiv.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 100); // Adjust the typing speed (milliseconds)
    }
}

typeWriter(welcomeText, 0);