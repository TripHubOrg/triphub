export default function Navbar(props){
    return `<nav class="navbar navbar-expand sticky-top navbar-dark bg-dark">
        <a class="navbar-brand p-1" href="#">TripHub</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a href="/" data-link class="p-2" style="text-decoration:none; color:white">Home</a>
            </li>
            <li class="nav-item active">
                <a href="/posts" data-link class="p-2" style="text-decoration:none; color:white">Posts</a>
            </li>
            <li class="nav-item">
                <a href="/about" data-link class="p-2" style="text-decoration:none; color:white">About</a>
            </li>
            <li class="nav-item">
                <a href="/login" data-link class="p-2" style="text-decoration:none; color:white">Login</a>
            </li>
            <li class="nav-item">
                <a href="/users" data-link class="p-2" style="text-decoration:none; color:white">Register</a>
            </li>
            <li class="nav-item">
                <a href="/mapbox" data-link class="p-2" style="text-decoration:none; color:white">Mapbox</a>
            </li>
            <li class="nav-item">
                <a href="/search" data-link class="p-2" style="text-decoration:none; color:white">Search</a>
            </li>
        </ul>
</nav>`
}