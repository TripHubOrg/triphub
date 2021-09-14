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

<form class="row g-3">

  <div class="col-md-12">
    <label for="full-Name" class="form-label">Full Name</label>
    <input  id="full-Name" name="full-Name" type="text" class="form-control"/>
  </div>
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
   <div class="col-md-12">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-md-6">
    <label for="confirmPassword4" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="confirmPassword4">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
</body>
</html>`;
}

export function RegisterEvent() {
        $("#register-btn").click(function () {

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