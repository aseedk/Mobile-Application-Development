function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
validEmail = []
input = ["john@gmail.com", "david.doe@md.com.uk", "nathali@@gmail.com","mans@com."];
for (const email of input) {
    if (validateEmail(email))
        validEmail.push(email)
}
console.log(validEmail)
