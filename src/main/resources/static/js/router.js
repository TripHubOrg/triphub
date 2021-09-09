/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
import Home, {BeginAllEvents} from "./views/home.js";
import Mapbox from "./mapbox.js";
import AttractionsView, {BeginAttractionsEvents} from "./views/attractions.js";


export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: BeginAllEvents
        },
        '/home': {
            returnView: Home,
            state: {},
            uri: '/home',
            title: 'Home',
            viewEvent: BeginAllEvents
        },
        '/attractions':{
            returnView: AttractionsView,
            state: {},
            uri: '/attractions',
            title: 'Attractions',
            viewEvent: BeginAttractionsEvents
        },
        '/register':{
            returnView: AttractionsView,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: BeginAttractionsEvents
        }

    }

    return routes[URI];
}

