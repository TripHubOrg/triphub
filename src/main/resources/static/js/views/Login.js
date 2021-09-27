export default function login() {
    return `
        <div class="container">
        </html>
            <div class="row justify-content-center pt-5">
                <div class="col-12 text-center">
                    <h1 class="my-5" id="title">Login</h1>
                    <hr>
                    <form id="loginForm">
                    <div class="row-col-1">
                       <label for="username" class="col-5 form-label">Email</label>
                       <input type="text" class="col-5 mx-auto form-control" name="user" id="username">
                    </div>
                    <div class="row-col-1">
                       <label class="col-5 form-label" for="password">Password </label>
                       <input type="password" class="col-5 mx-auto form-control" name="pass" id="password">
                    </div>
                    <button id="login-btn" class="btn btn-info">Login In</button>
            </div>
                </form>
            </div>
        </div>
</html>`
}