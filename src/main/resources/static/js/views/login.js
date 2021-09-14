export default function login() {
    return `<!DOCTYPE html>
<html lang="en">
        <title>login form</title>
        <div class="container">
            <form name="myform" >
                <div>
                    <h1 id="title">Login</h1>
                    <div id="box" class="rounded-circle">
                       <label>Username</label>
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
        </div>
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