export default function Footer(props) {
    return `
<footer>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span>Copyright © 2021, All Right Reserved</span>
                    </div>
                    <div class="col-md-6">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#"  id="footerHome" class="animate-border border-black"
                                    onclick="window.location.href='http://localhost:8080/'">Home</a>
                                </li>
                                <li>
                                    <a href="#" id="footerAboutUs" class="animate-border border-black">About Us</a>
                                </li>
                                <li>
                                    <a href="#" id="footerCredits" class="animate-border border-black">Credits</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- Credit to https://bootsnipp.com/snippets/ooa9M -->
      </footer>`
}

export function footerLinks(){

}

function footerHome(){
    $("#footerHome").click(function () {
    });

}