
function saveData() {
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;

    let user_records = new Array();
    if (email.length == 0 || psw.length == 0) {
        alert("Please Enter Email or Password")
    } else {
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

        if (user_records.some((v) => { return v.email == email && v.psw == psw })) {
            alert("Login SuccessFull")
            let current_user = user_records.filter((v) => { return v.email == email && v.psw == psw })[0]
            localStorage.setItem("name", current_user.name)
            localStorage.setItem("email", current_user.email)
            localStorage.setItem("phone", current_user.phone)
            localStorage.setItem("city", current_user.city)
            localStorage.setItem("pincode", current_user.pincode)

            window.location.href = "homepage.html";
        } else {
            alert("Invalid Email Or Password")
        }
    }
}
