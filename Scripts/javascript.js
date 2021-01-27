function sendFeedback(event) 

{
console.log ("test");

    event.preventDefault();

    var formData= event.srcElement;

    var thankyouHeader = document.getElementById("thankyou");

    thankyouHeader.innerText = "Tack för ditt meddelande. Jag hör av mig snart!";

    console.log(formData.name.value);
    console.log(formData.email.value);
    console.log(formData.message.value);

}