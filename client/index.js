const $ = selector => document.querySelector(selector);

const joinList = (evt) => {
    const email1 =  document.querySelector("#email_1").value;
    const email2 = $("#email_2").value;

    let isValid = false;
    if(email1 === email2) {
        isValid = true;
    }

    if(!isValid){
        evt.preventDefault();
        $("#display").innerHTML = "Email1 and Email2 does not match..."
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("#join_list").addEventListener("click", joinList);
});

