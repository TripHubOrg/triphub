// export default function login() {
//     return `
//         <div class="container">
//         </html>
//             <div class="row justify-content-center pt-5">
//                 <div class="col-12 text-center">
//                     <h1 class="my-5" id="title">Login</h1>
//                     <hr>
//                     <div class="row-col-1">
//                        <label for="userName" class="col-5 form-label">Username</label>
//                        <input type="text" class="col-5 mx-auto form-control" name="user" id="userName">
//                     </div>
//                     <div class="row-col-1">
//                        <label class="col-5 form-label" for="password">Password </label>
//                        <input type="password" class="col-5 mx-auto form-control" name="pass" id="password">
//                     </div>
//                     <button class="btn btn-info">Login In</button>
//             </div>
//                 </form>
//             </div>
//         </div>
// </html>
// `
// }

export default function login(){
    return `
    <div class="login-form">
    
        <div class="top-login">
            <span><img src="../../assets/triphub.png" alt="" class="login-logo"></span>
        </div>
        <h1>Login</h1>
        <div class="login-top">
            <form action="">
            
                <div class="login-ic">
                    <i></i>
                    <input type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}">
                    <div class="clear"> </div>
                </div>
                
                <div class="login-ic">
                    <i class="icon"></i>
                    <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}">
                    <div class="clear"> </div>
                </div>
                
                <div class="log-bwn">
                    <input type="submit" value="Login">
                </div>
                
            </form>
        </div>
        
    </div>
    `
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