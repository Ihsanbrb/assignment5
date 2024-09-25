// show hide section
function btnListener() {
    document.getElementById("donation")
        .addEventListener("click", function () {
            showSectionByID("donate_section");
        });
    document.getElementById("history")
        .addEventListener("click", function () {
            showSectionByID("history_section");
        });
    
}
btnListener();