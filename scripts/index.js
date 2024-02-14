//To manage About-me 3 links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const tlinks = document.querySelectorAll(".tab-links")

tlinks.forEach(function(tlink) {
    tlink.addEventListener("click", (event) => {
        for(let tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.target.classList.add("active-link")
        const target = event.target.getAttribute("name")
        document.getElementById(target).classList.add("active-tab");
    })
})


//To manage mobile navigation on top-right
var sidemenu = document.getElementById("sidemenu");
let menus = document.querySelectorAll(".menu")

function openmenu(){
    sidemenu.style.right = "0";
}
menus.forEach(function(menu){
    menu.addEventListener("click", (event) => {
        sidemenu.style.right = "-200px";
    })
})



//To manage user input data under Contact-me section to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxegXjZzHU5A4I-9yi1jZAgKCIi5fQML5EaFt8wcJp2Rz50O1PemuzmID-WR69nKs_d/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const submitbtn = document.getElementById("submit")

form.addEventListener('submit', e => {
    e.preventDefault()

    submitbtn.style.background = "#943c58"
    submitbtn.disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => 
        {  
            submitbtn.disabled = false;
            submitbtn.style.background = "#ff0051"
            
            msg.innerHTML = "Message sent successfully."
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        }
    )
    .catch(error => 
        // console.error('Error!', error.message)
        {
            msg.innerHTML = "Message not sent."
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        }
    )
})