export default function login() {
    return `<!DOCTYPE html>
<html lang="en">
        <title>login form</title>
        <body>
            <form name="myform">
                <div>
                    <p id="form"><i>Login</i></P>
                    <div id="box">
                       <label>User name</label>
                       </br></br>
                       <input type="text" class="form-control" name="user">
                       </br>
                       <label>Password </label>
                       </br> </br>
                       <input type="password" class="form-control" name="pass">
                       </br></br>
                       <a href="#" id="login" onclick="loginEvent()">login</a>
                    </div>
               </div>
            </form>
        </body>
</html>`
}

export function loginEvent() {
    // if (document.myform.user.value == "") {
    //     alert("enter usernsme");
    //     document.myform.user.focus();
    //     return false;
    // }
    // if (document.myform.pass.value == "") {
    //     alert("enter password");
    //     document.myform.pass.focus();
    //     return false;
    // } else {
    //     alert("logged in");
    //     return true;
    // }

    //check out database
}