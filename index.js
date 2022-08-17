let submitBtn = document.getElementById('submit')
let personName = document.getElementById('name')
let email = document.getElementById('email')
let telphone = document.getElementById('tel')
let password = document.getElementById('password')
let welcomeSec = document.getElementById('welcome')



let name = personName.value
console.log(name);
document.addEventListener('click', welcome)

function welcome(e) {
    const isClickedOut = personName.contains(e.target);
    if (!isClickedOut && name !== "") {
        let message = `Welcome ${name}`;
        welcomeSec.innerHTML = message;
    }
    
}

// ON SUBMIT 

    // test the password, email and phone number for completeness 
    // the code below is not working
submitBtn.addEventListener("submit", function(e) {
    const thankYou = `<h1>Thank You ${personName.value} For Registering With Us`
    document.getElementById('secContainer').innerHTML = thankYou;
    
})

