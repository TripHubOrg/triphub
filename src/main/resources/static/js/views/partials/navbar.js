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
                        <a class="scroll-link text-decoration-none" href="/home" data-link><i class="fas fa-home"></i> Home </a>
                    </li>
                    <li>
                        <a class="scroll-link text-decoration-none" href="/attractions" data-link><i class="fas fa-cog"></i> Attractions </a>
                    </li>
                    <li>
                        <a class="scroll-link text-decoration-none" href="/login" data-link><i class="fas fa-user"></i> Login </a>
                    </li>
                    <li>
                        <a class="scroll-link text-decoration-none" href="/register" data-link><i class="fas fa-pencil-alt"></i> Sign up </a>
                    </li>
                    <li>
                        <a class="scroll-link text-decoration-none" href="/triptrack" data-link><i class="fas fa-envelope"></i> Triptracks</a>
                    </li>
                    <li>
                        <a class="scroll-link text-decoration-none" href="/userhomepage" data-link><i class="fas fa-envelope"></i>Userhomepage</a>
                    </li>
                </ul>

            </nav>

            <div class="overlay">

            </div>
    `
};

export function navbarEvent(){
    $(document).ready(function() {
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


