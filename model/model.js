import home from "../pages/home.js";
import trails from "../pages/trails.js";

export function loadPage(pageID) {

    console.log(`model.js ${pageID}`);

    switch (pageID) {

        case "home":
            document.querySelector("main").innerHTML = home;
            break;

        case "trails":
            document.querySelector("main").innerHTML = trails;
            break;

    }
}