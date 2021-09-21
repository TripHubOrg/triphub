export default function Navbar(props){
    return `
             <nav class="sidebar">
                <div class="dismiss">
                    <i class="fas fa-arrow-left"></i>
                </div>

                <div class="logo">
                    <h3><a href="#">Triphub</a></h3>
                </div>

                <ul class="list-unstyled menu-elements">
                    <li class="active">
                        <a class="scroll-link" href="/home" data-link><i class="fas fa-home"></i> Home </a>
                    </li>
                    <li>
                        <a class="scroll-link" href="/attractions" data-link><i class="fas fa-cog"></i> Attractions </a>
                    </li>
                    <li>
                        <a class="scroll-link" href="/login" data-link><i class="fas fa-user"></i> Login </a>
                    </li>
                    <li>
                        <a class="scroll-link" href="/register" data-link><i class="fas fa-pencil-alt"></i> Sign up </a>
                    </li>
                    <li>
                        <a class="scroll-link" href="/triptrack" data-link><i class="fas fa-envelope"></i> Triptracks</a>
                    </li>
                    <li>
                        <a class="scroll-link" href="/userhomepage" data-link><i class="fas fa-envelope"></i> (test)Userhomepage)</a>
                    </li>
                    <li>
                        <a href="#otherSections" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" role="button" aria-controls="otherSections">
                            <i class="fas fa-sync"></i>Contact Us
                        </a>
                        <ul class="collapse list-unstyled" id="otherSections">
                            <li>
                                <a class="scroll-link" href="">Raul</a>
                            </li>
                             <li>
                                <a class="scroll-link" href="">Wagner</a>
                            </li>
                             <li>
                                <a class="scroll-link" href="">Nathan</a>
                            </li>
                             <li>
                                <a class="scroll-link" href="">Moses</a>
                            </li>
                        </ul>
                    </li>
                </ul>


                <div class="dark-light-buttons">
                    <a class="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
                    <a class="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
                </div>

            </nav>

            <div class="overlay">

            </div>

<!--            &lt;!&ndash; Content &ndash;&gt;-->
<!--            <div class="content">-->

<!--                &lt;!&ndash; open sidebar menu &ndash;&gt;-->
<!--                <a class="btn btn-primary btn-customized open-menu" href="#" role="button">-->
<!--                    <i class="fas fa-align-left"></i> <span>Menu</span>-->
<!--                </a>-->

<!--                &lt;!&ndash; ... &ndash;&gt;-->

<!--                &lt;!&ndash; here is the page's content (not shown here) &ndash;&gt;-->

<!--                &lt;!&ndash; ... &ndash;&gt;-->

<!--            </div>-->
    `
};

export function navbarEvent(){
    $(document).ready(function() {
        console.log("navbar is ready")
        $('.dismiss, .overlay').on('click', function() {
            $('.sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('.open-menu').on('click', function(e) {
            e.preventDefault();
            $('.sidebar').addClass('active');
            $('.overlay').addClass('active');
            // close opened sub-menus
            $('.collapse.show').toggleClass('show');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });

    });
};



    /* other code */



// $('.to-top a').on('click', function(e) {
//     e.preventDefault();
//     if($(window).scrollTop() != 0) {
//         $('html, body').stop().animate({scrollTop: 0}, 1000);
//     }
// });
//
//
// $('a.btn-customized-dark').on('click', function(e) {
//     e.preventDefault();
//     $('.sidebar').removeClass('light');
// });
//
// $('a.btn-customized-light').on('click', function(e) {
//     e.preventDefault();
//     $('.sidebar').addClass('light');
// });

//
// $('.sidebar').mCustomScrollbar({
//     theme: "minimal-dark"
// });

