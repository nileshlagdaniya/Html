

// Add Users popup

$(document).ready(function () {
    $("#show_popup").click(function () {
        $("#popup-container").show();
    })

    $("#close-btn").click(function () {
        $("#popup-container").hide();
    })
})
//// ************* Add Users with Pop up Button And Fill form/////////


// Add users button
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
            localStorage.setItem("users", JSON.stringify(user_records));
        }
    }
}
// **** users show data table **** //

var user_records = []
var searchKey;
showdata()
function showdata() {
    user_records = JSON.parse(localStorage.getItem("users"))
    if (user_records.length >= 1) {
        for (let i = 0; i < user_records.length; i++) {
            let addTr = document.createElement('tr');
            addTr.className = 'row';
            addTr.innerHTML = '<td class="col-2 border pt-3 ">' + user_records[i].name + '</td><td class="col-2  border pt-3 ">' + user_records[i].email + '</td><td class="col-2  border pt-3 ">' + user_records[i].phone + '</td><td class="col-2  border pt-3">' + user_records[i].city + '</td><td class="col-2  border pt-3 ">' + user_records[i].pincode + '</td>' + '<td class="col-2 border pt-3  "><button type="button" onclick="updateData(id)" class="btn btn-primary mb-2 me-1">Update<i class="fa fa-edit ms-2"></i></button><button type="button" id="del' + i + '" onclick="deleteData(id)" class="btn btn-danger mb-2">Delete <i class="fa fa-trash-can"></i></button> </td>';
            document.getElementById('showUsers').appendChild(addTr);
        }
    } else {
        let noUser = document.getElementById("no_users")
        noUser.innerHTML = "No users"
    }
}

// ****** delete data button ******//
function deleteData(id) {
    let index = id.slice(-1);
    var data = JSON.parse(localStorage.getItem("users"))
    data.splice(index, 1)
    localStorage.setItem("users", JSON.stringify(data))
    window.location.reload()
}


// ***** delete row button  *****//
function delUserBtn() {
    var table = document.getElementById('tableData');
    var row = table.deleteRow(-1);
}

// ***** Search Users******//


var userBackup = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
function searchUsers(searchKey) {
    //********** Search any name, email, phone, city and pincode. ********//

    searchKey = document.getElementById('searchUsersData').value;
    // const userBackup = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    user_records = userBackup.filter(r => { return [r.name.toLowerCase().search(searchKey.toLowerCase()) > -1], [r.email.toLowerCase().search(searchKey.toLowerCase()) > -1], [r.phone.toLowerCase().search(searchKey.toLowerCase()) > -1], [r.city.toLowerCase().search(searchKey.toLowerCase()) > -1], [r.pincode.toLowerCase().search(searchKey.toLowerCase()) > -1] });

    //********** search for users name is login or not *********//

    var filter, table, tr, td, i, found;
    searchKey = document.getElementById("searchUsersData");
    filter = searchKey.value.toUpperCase();
    table = document.getElementById("tableData");
    tr = table.getElementsByTagName("tr");

    if (user_records.length == "") {
        let se_er = document.getElementById('searchError');
        se_er.innerHTML = "Users Not Found";
    }
    else {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) === 0) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;

            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



