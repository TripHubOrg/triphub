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
                    <input type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" id="username">
                    <div class="clear"> </div>
                </div>
                
                <div class="login-ic">
                    <i class="icon"></i>
                    <input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}" id="password">
                    <div class="clear"> </div>
                </div>
                
                <div class="log-bwn">

                    <input type="submit" value="Login" id="login-btn">

                </div>
                
            </form>
        </div>
        
    </div>
    `
}