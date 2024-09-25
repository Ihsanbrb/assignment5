// go to blog page
document.getElementById("btn_blog")
    .addEventListener("click", function () {
        window.location.href = "/blog.html";
    });

// get id | set event listener |
function donation(donateInputID, donateBalID, donateName) {

    // main balance
    const mainBalance = getTextFieldValueByID("balance");
    const donateInput = getInputFieldValueByID(donateInputID);
        
    // validet input is number 
    if (isNaN(donateInput) || donateInput <= 0) {
        alert("Enter valid amount");
        return;
    }

    // check balance is 0
    if (donateInput > mainBalance) {
        alert("You do not have balance");
        return;
    }

    // update main balance
    const newMainBalance = mainBalance - donateInput;
    document.getElementById("balance").innerText = newMainBalance;
        
    // update donate balance
    const donateMainBal = getTextFieldValueByID(donateBalID);
    const donateNewMainBal = donateMainBal + donateInput;
    document.getElementById(donateBalID).innerText = donateNewMainBal;


    // show modal
    const modal = document.getElementById("show_modal");
    modal.querySelector("p").innerHTML = `You have donated for ${donateName}`;
    modal.showModal();

    // close modal
    document.getElementById("close_modal")
        .addEventListener("click", function () {
            const modal = document.getElementById("show_modal");
            modal.close();
        });

    // donate history
    donateHistory(donateInput, donateName);
        
    // clear input field 
    document.getElementById(donateInputID).value = "";

}

// set event listener for all btn
document.getElementById("noa_donate_btn")
    .addEventListener("click", function () {
        donation("noa_donate_input", "noa_donate_bal", "Donate for Flood at Noakhali, Bangladesh");
    });

document.getElementById("feni_donate_btn")
    .addEventListener("click", function () {
        donation("feni_donate_input", "feni_donate_bal", "Donate for Flood Relief in Feni,Bangladesh");
    });

document.getElementById("aid_donate_btn")
    .addEventListener("click", function () {
        donation("aid_donate_input", "aid_donate_bal", "Aid for Injured in the Quota Movement");
    });


