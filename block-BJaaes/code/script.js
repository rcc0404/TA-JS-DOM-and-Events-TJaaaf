let form = document.querySelector("form");

let errorMessage = {};

function displayError(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name];
    elm.parentElement.classList.add("error");
};

function displaySuccess(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessage[name] = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
};

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements["password-check"].value;

    //     1. Username can't be less than 4 characters
    if (username.length <= 4) {
        errorMessage.username = "Username can't be less than 4 character";
        displayError("username");
    } else {
        displaySuccess("username");
    }
    
    // 2. Name can't be numbers
    
    if (!isNaN(name)) {
        errorMessage.name = "Name can't be numbers";
        displayError("name");
    } else {
        displaySuccess("name");
    }
    // 3. Email must contain the symbol `@`
    // 4. Email must be at least 6 characters
    if (!email.includes("@")) {
        errorMessage.email = "mail must contain the symbol `@`";
        displayError("email");
    } else if (email.length < 6) {
        errorMessage.email = "Email must be at least 6 characters";
        displayError("email");
    } else {
        displaySuccess("email");
    };
    // 5. Phone numbers can only be a number
    // 6. Length of phone number can't be less than 7
    if (!isNaN(phone)) {
        errorMessage.phone = "Phone numbers can only be a number";
        displayError("phone");
    } else if (phone.length < 7) {
        errorMessage.phone = "Length of phone number can't be less than 7";
        displayError("phone");
    } else {
        displaySuccess("phone");
    };
    
    // 8. Password and confirm password must be same.
    if (password !== passwordCheck) {
        errorMessage.password = "Password and confirm password must be same";
        errorMessage["password-check"] = "Password and confirm password must be same";
        displayError("password");
        displayError("password-check")
    } else {
        displayError("password");
        displayError("password-check")
    }
};

// console.log({ username, name, email, phone, password, passwordCheck });

form.addEventListener("submit", handleSubmit);