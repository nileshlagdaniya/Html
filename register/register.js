function saveData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    let psw2 = document.getElementById("psw2").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;

    let user_records = new Array();

    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if (name.length == 0 || email.length == 0 || psw.length == 0 || phone.length == 0 || city.length == 0 || pincode == 0) {
        alert("please fill all the field")
    }
    else {
        if (psw !== psw2) {
            alert("Password and Confirm Password No match!!")
        } else {
            if (user_records.some((v) => { return v.email == email })) {
                alert("User Already Exist")
            } else {
                user_records.push({
                    "name": name,
                    "email": email,
                    "psw": psw,
                    "phone": phone,
                    "city": city,
                    "pincode": pincode
                });
                document.getElementById('form').reset();
                window.location.href = '../login/login.html'
                localStorage.setItem("users", JSON.stringify(user_records));
            }
        }
    }
}
