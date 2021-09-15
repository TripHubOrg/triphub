

export default function Navbar(props){

    return `<nav class="navbar navbar-expand sticky-top navbar-dark bg-dark">
        <a class="navbar-brand p-1" href="#">TripHub</a>
        <ul class="navbar-nav mr-auto d-flex">
            <li class="nav-item active">
                <a href="/" data-link class="p-2" style="text-decoration:none; color:white">Home</a>
            </li>
            <li class="nav-item">
                <a href="/attractions" data-link class="p-2" style="text-decoration:none; color:white">Attractions</a>
            </li>
               <li class="nav-item">
                <a href="/login" data-link class="p-2" style="text-decoration:none; color:white">Login</a>
            </li>
            <li class="nav-item">
                <a href="/register" data-link class="p-2" style="text-decoration:none; color:white">Sign up</a>
            </li>
            <li class="nav-item">
                <a href="/triptrack" data-link class="p-2" style="text-decoration:none; color:white">Triptrack</a>
            </li>
        </ul>
</nav>`

    // `<div id="main">
    //
    //             <div id="mySidenav" class="sidenav">
    //                 <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    //                 <a href="/">Home</a>
    //                 <a href="#">Map</a>
    //                 <a href="/attractions">Attractions</a>
    //                 <a href="#">Log-In</a>
    //                 <a href="#">Sign Up</a>
    //             </div>
    //
    //             <span onclick="openNav()"> <h1>Triphub</h1>
    //             </span>
    // </div>`

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// export default function Navbar(props){
//
//     return `
//      <nav class="sidebar">
//                 <div class="dismiss">
//                     <i class="fas fa-arrow-left"></i>
//                 </div>
//
//                 <div class="logo">
//                     <h3><a href="index.html">Bootstrap 4 Template with Sidebar Menu</a></h3>
//                 </div>
//
//                 <ul class="list-unstyled menu-elements">
//                     <li class="active">
//                         <a class="scroll-link" href="/"><i class="fas fa-home"></i> Home </a>
//                     </li>
//                     <li>
//                         <a class="scroll-link" href="/attractions"><i class="fas fa-cog"></i> Attractions </a>
//                     </li>
//                     <li>
//                         <a class="scroll-link" href="/login"><i class="fas fa-user"></i> Login </a>
//                     </li>
//                     <li>
//                         <a class="scroll-link" href="/register"><i class="fas fa-pencil-alt"></i> Sign up </a>
//                     </li>
//                     <li>
//                         <a class="scroll-link" href="/triptrack"><i class="fas fa-envelope"></i> Triptracks</a>
//                     </li>
//                     <li>
//                         <a href="#otherSections" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" role="button" aria-controls="otherSections">
//                             <i class="fas fa-sync"></i>Other sections
//                         </a>
//                         <ul class="collapse list-unstyled" id="otherSections">
//                             <li>
//                                 <a class="scroll-link" href="#section-3">Our projects</a>
//                             </li>
//                             <li>
//                                 <a class="scroll-link" href="#section-4">We think that...</a>
//                             </li>
//                         </ul>
//                     </li>
//                 </ul>
//
//                 <div class="to-top">
//                     <a class="btn btn-primary btn-customized-3" href="#" role="button">
//                         <i class="fas fa-arrow-up"></i> Top
//                     </a>
//                 </div>
//
//                 <div class="dark-light-buttons">
//                     <a class="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
//                     <a class="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
//                 </div>
//
//             </nav>
//
//             <div class="overlay">
//
//             </div>
//
//             <!-- Content -->
//             <div class="content">
//
//                 <!-- open sidebar menu -->
//                 <a class="btn btn-primary btn-customized open-menu" href="#" role="button">
//                     <i class="fas fa-align-left"></i> <span>Menu</span>
//                 </a>
//
//                 <!-- ... -->
//
//                 <!-- here is the page's content (not shown here) -->
//
//                 <!-- ... -->
//
//             </div>
//     `
// }
//
// $(document).ready(function() {
//
//     $('.dismiss, .overlay').on('click', function() {
//         $('.sidebar').removeClass('active');
//         $('.overlay').removeClass('active');
//     });
//
//     $('.open-menu').on('click', function(e) {
//         e.preventDefault();
//         $('.sidebar').addClass('active');
//         $('.overlay').addClass('active');
//         // close opened sub-menus
//         $('.collapse.show').toggleClass('show');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });
//
//     /* other code */
//
// });
//
//
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

