/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
import Home from "./views/home.js";
import Mapbox from "./mapbox.js";

export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
        },
        '/mapbox': {
            returnView: Mapbox,
            state: {},
            uri: '/mapbox',
            title: 'Mapbox',
        }

    }

    return routes[URI];
}

