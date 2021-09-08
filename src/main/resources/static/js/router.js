/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
import Home, {BeginAllEvents} from "./views/home.js";
import Mapbox from "./mapbox.js";

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
        }

    }

    return routes[URI];
}

