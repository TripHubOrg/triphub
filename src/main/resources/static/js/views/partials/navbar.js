

export default function Navbar(props){

    return `<nav class="navbar navbar-expand sticky-top navbar-dark bg-dark">
        <a class="navbar-brand p-1" href="#">TripHub</a>
        <ul class="navbar-nav mr-auto d-flex">
            <li class="nav-item active">
                <a href="/" data-link class="p-2" style="text-decoration:none; color:white">Home</a>
            </li>
            <li class="nav-item">
                <a href="/mapbox" data-link class="p-2" style="text-decoration:none; color:white">Mapbox</a>
            </li>
               <li class="nav-item">
                <a href="/login" data-link class="p-2" style="text-decoration:none; color:white">Login</a>
            </li>
            <li class="nav-item">
                <a href="/users" data-link class="p-2" style="text-decoration:none; color:white">Sign up</a>
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

