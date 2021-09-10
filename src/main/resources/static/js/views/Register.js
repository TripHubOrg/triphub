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

<!--<form id="login-form">-->

<!--<div id="registerForm" class="col-12">-->

<!--    <label for="full-Name">Full Name</label>-->
<!--    <input  id="full-Name" name="full-Name" type="text" class="border border-primary"/>-->
<!--    <br>-->
<!--    <label for="email">Email</label>-->
<!--    <input  id="email" name="email" type="text" class="border border-primary"/>-->
<!--    <br>-->
<!--    <label for="username">Username</label>-->
<!--    <input  id="username" name="username" type="text" class="border border-primary"/>-->
<!--    <br>-->
<!--    <label for="password">Password</label>-->
<!--    <input id="password" name="password" type="password" class="border border-primary"/>-->
<!--    <br>-->
<!--    <label for="confirmPassword">Confirm Password</label>-->
<!--    <input id="confirmPassword" name="confirmPassword" type="text" class="border border-primary"/>-->
<!--    <br>-->
<!--  <button id="register-btn" type="button" class="border border-primary">Register</button>-->
<!--  -->
<!--  </div>-->

<!--</form>-->


<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
    </div>
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