function searchPage() {

let search = document.getElementById("searchInput").value.toLowerCase();

if(search.includes("weather")) {
    window.location.href = "Weather.html";
}

else if(search.includes("marketplace")) {
    window.location.href = "Marketplace.html";
}

else if(search.includes("marketprice")) {
    window.location.href = "Marketprice.html";
}

else if(search.includes("fertilizer")) {
    window.location.href = "Fertilizer.html";
}

else if(search.includes("pest")) {
    window.location.href = "Pest.html";
}

else if(search.includes("disease")) {
    window.location.href = "Disease.html";
}

else if(search.includes("scheme")) {
    window.location.href = "Scheme.html";
}

else if(search.includes("community")) {
    window.location.href = "Community.html";
}

else if(search.includes("profile")) {
    window.location.href = "Profile.html";
}

else if(search.includes("settings")) {
    window.location.href = "Settings.html";
}

else if(search.includes("contact")) {
    window.location.href = "Contact.html";
}

else {
    alert("Page not found");
}

}

function topFunction() {
    window.scrollTo(0, 0);
}


function speak(){
  alert("Speak function reached");
}
    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}
function startVoice() {

let word = prompt("Type crop, weather, fertilizer, pest, disease, scheme");

if(word == "crop") {
    window.location.href = "Crops.html";
}

else if(word == "weather") {
    window.location.href = "Weather.html";
}

else if(word == "fertilizer") {
    window.location.href = "Fertilizer.html";
}

else if(word == "pest") {
    window.location.href = "Pest.html";
}

else if(word == "disease") {
    window.location.href = "Disease.html";
}

else if(word == "scheme") {
    window.location.href = "Scheme.html";
}

else {
    alert("Page not found");
}

}