window.onload = function() {
    // Lyssna efter händelser
    const teamMembers = document.getElementsByClassName("team-member");

    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];
        const img = member.getElementsByClassName("profile")[0];

        img.addEventListener("mouseover", function() {
            effectOn(member);
        });

        img.addEventListener("mouseout", function() {
            effectOff(member);
        });

        img.addEventListener("click", function() {
            editTitle(member);
        });
    }
}
var editTitle = function(e) {
    // Ändra "team-title"
    const title = e.getElementsByClassName("team-title")[0];
    const newTitle = prompt("Ny titel:");
    if (newTitle) {
        title.textContent = newTitle;
    }
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    const img = id.getElementsByClassName("profile")[0];
    img.classList.add("hovering");
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    const img = id.getElementsByClassName("profile")[0];
    img.classList.remove("hovering");
}
