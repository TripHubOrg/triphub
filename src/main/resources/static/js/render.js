/**
 * Pushes the current URI to the URL bar and sets the HTML of the app div.
 * @param props - the data required for view rendering
 * @param route - the object containing information for the given endpoint
 */
import Navbar, {navbarEvent} from "./views/partials/navbar.js";
import Footer from "./views/partials/footer.js";

export default function render(props, route) {
    const app = document.querySelector('#app');
    const title = `TripHub - ${route.title}`;
    history.pushState(props, title, route.uri);
    document.title = title;

    // add view and navbar to DOM
    app.innerHTML = `${Navbar(null)} ${route.returnView(props)}
    ${Footer(null)}`;
    navbarEvent();
    // add events AFTER view is added to DOM
    if (route.viewEvent){
        route.viewEvent();
    }

}
