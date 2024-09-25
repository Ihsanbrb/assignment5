// show hide sections
function btnListener() {
    document.getElementById("donation")
        .addEventListener("click", function () {
            showSectionByID("donate_section", "donation");
        });
    document.getElementById("history")
        .addEventListener("click", function () {
            showSectionByID("history_section", "history");
        });
    
}

    btnListener();