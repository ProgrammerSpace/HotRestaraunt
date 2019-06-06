$(document).on("click", "#submit", function () {
    event.preventDefault();
    var newCharacter = {
        name: $("#name").val().trim(),
        ph: $("#role").val().trim(),
        email: $("#age").val().trim(),
        uniqueId: $("#force-points").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/characters", newCharacter)
        .then(function (data) {
            console.log("add.html", data);
            alert("Adding character...");
        });
})