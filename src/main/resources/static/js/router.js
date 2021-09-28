/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
import Home, {BeginAllEvents} from "./views/Home.js";
import AttractionsView, {BeginAttractionsEvents} from "./views/Attractions.js";
import Register, {RegisterEvent} from "./views/Register.js";
import login from "./views/Login.js";
import trips from "./views/Trips.js";
import userhomepage, {routeToTripTrack} from "./views/Userhomepage.js";
import Triptrack, {TripTrackOnLoad} from "./views/Triptrack.js";
import LoginEvent from "./auth.js";


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
        '/attractions': {
            returnView: AttractionsView,
            state: {},
            uri: '/attractions',
            title: 'Attractions',
            viewEvent: BeginAttractionsEvents
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/login': {
            returnView: login,
            state: {},
            uri: '/login',
            title: 'Login',
            viewEvent: LoginEvent
        },
        '/triptrack': {
            returnView: Triptrack,
            state: {},
            uri: '/triptrack',
            title: 'Triptrack',
            viewEvent: TripTrackOnLoad
        },
        '/userhomepage': {
            returnView: userhomepage,
            state: {},
            uri: '/userhomepage',
            title: 'UserHomePage',
            viewEvent:routeToTripTrack,
        }
    };
    return routes[URI];
}

