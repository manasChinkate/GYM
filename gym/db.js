function sendMail() {
    var param =
    {
         name : document.getElementById("name").value,
         email : document.getElementById("email").value,
         message : document.getElementById("message").value,
    };



const serviceID = "service_bhoh0ms";
const templateID = "template_q28vnmf"

emailjs.send(serviceID,templateID,param)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Mail Sent");
    }
)
.catch((err) => console.log(err));
}