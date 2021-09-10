export default function login() {
    return `<!DOCTYPE html>
<html lang="en">
        <title>login form</title>
        <meta="charset-utf8"><link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
                <body>
                    <form name="myform">


                        <div>
                        <p id="form"><i>Login</i></P>
                            <div id="box">
                                <label>User name  </label></br>
                        </br><input type="text" class="form-control" name="user"></br>
                        <label>Password </label></br> </br><input type="password" class="form-control" name="pass">
                </br>
                </br>
                <a href="#" id="login" onclick="myfunction()">login</a>
            </div>
        </form>
        </div>
    </body>
</html>`
}

export function loginEvent() {
    if (document.myform.user.value == "") {
        alert("enter usernsme");
        document.myform.user.focus();
        return false;
    }
    if (document.myform.pass.value == "") {
        alert("enter password");
        document.myform.pass.focus();
        return false;
    } else {
        alert("logged in");
        return true;
    }
}