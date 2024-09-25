// custom function
function getInputFieldValueByID(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// donate history
function donateHistory(amount, donateName) {
    const historyList = document.getElementById("history_list");
    // current local time
    const localTime = new Date().toLocaleString();
    // create history
    const listItem = document.createElement("li");
    listItem.classList.add("bg-gray-100", "p-3", "rounded", "border");
    // set content
    listItem.innerHTML = `
    <p>${amount} Taka is Donated for ${donateName}</p>
    <p>Date: ${localTime}</p>
    `;

    //appand child
    historyList.appendChild(listItem);
}

function showSectionByID(id) {
    // hide all section
    document.getElementById("donate_section").classList.add("hidden");
    document.getElementById("history_section").classList.add("hidden");

    // show clicked section
    document.getElementById(id).classList.remove("hidden");
}