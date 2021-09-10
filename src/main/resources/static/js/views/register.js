import createView from "../createView.js";

export default function Register(props) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Register</title>
</head>
<body>
<h1>Register</h1>

<form id="login-form">

<div id="registerForm">

<label for="full-Name">Full Name</label>
    <input  id="full-Name" name="full-Name" type="text" class="border border-primary"/>
    <label for="email">Email</label>
    <input  id="email" name="email" type="text" class="border border-primary"/>
    <label for="username">Username</label>
    <input  id="username" name="username" type="text" class="border border-primary"/>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" class="border border-primary"/>
    <label for="confirmPassword">Confirm Password</label>
    <input id="confirmPassword" name="confirmPassword" type="text" class="border border-primary"/>
  <button id="register-btn" type="button" class="border border-primary">Register</button>
  </div>

</form>

</body>
</html>`;
}

export function RegisterEvent() {
        $("#register-btn").click(function () {
            // let password = if ( $("#password").val === $("#confirmPassword").val ){
            //      $("#password").val()
            //  }

            let registerUser = {
                fullname: $("#full-Name").val(),
                username: $("#username").val(),
                password: $("#password").val(),
                confirmPassword: $("#confirmPassword").val(),
                email: $("#email").val()
            }
            let request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerUser)
            }
            console.log(request)

            fetch("http://localhost:8080/users", request).then((response) => {
                console.log(response.status)
                createView("/")
            })
        })
    }

    function passwordValidation() {
        let ogPass = $("#password").val()
        let dupPass = $("#confirmPassword").val()
        let BTN = $("#register-btn").val()
        let checkMate = document.querySelector("#registerForm");


        BTN.onclick = function () {
            if (ogPass.value != dupPass.value) {
                checkMate.style.display = "block";
                checkMate.classList.remove("matched");
                checkMate.textContent = "Error! Confirm Password Not Match";
                return false;
            } else {
                checkMate.style.display = "block";
                checkMate.classList.add("matched");
                checkMate.textContent = "Nice! Confirm Password Matched";
                return false;
            }
        }
    }