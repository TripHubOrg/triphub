/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
import Home, {BeginAllEvents} from "./views/home.js";
import AttractionsView, {BeginAttractionsEvents} from "./views/attractions.js";
import Register, {RegisterEvent} from "./views/Register.js";
import login, {loginEvent} from "./views/login.js";
import trip from "./views/Trip.js";


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
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/trip':{
            returnView: trip,
            state: {},
            uri: '/trip',
            title: 'Trip',
        },
        '/login':{
            returnView: login,
            state: {},
            uri: '/login',
            title: 'Login',
            viewEvent: loginEvent
        }

    }

    return routes[URI];
}

