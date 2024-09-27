document
    .getElementById("private-sites-btn")
    .addEventListener("click", function (event) {
        event.stopPropagation();
        document.getElementById("hidden-options1").style.display = "flex";
        document.getElementById("hidden-options2").style.display = "none";
    });

document
    .getElementById("tender-sites-btn")
    .addEventListener("click", function (event) {
        event.stopPropagation();
        document.getElementById("hidden-options2").style.display = "flex";
        document.getElementById("hidden-options1").style.display = "none";
    });

document.addEventListener("click", function (event) {
    const options1 = document.getElementById("hidden-options1");
    const options2 = document.getElementById("hidden-options2");

    if (
        options1.style.display === "flex" ||
        options2.style.display === "flex"
    ) {
        options1.style.display = "none";
        options2.style.display = "none";
    }
});

document.querySelectorAll(".hidden-options button").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});