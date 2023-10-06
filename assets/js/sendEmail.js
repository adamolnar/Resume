function sendMail(contactForm) {
    emailjs.send("service_yvfuh1j", "template_kqudijl", {
        "from_name": contactForm.name.value,
        "reply_to": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}