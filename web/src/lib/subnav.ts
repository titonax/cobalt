import { browser } from "$app/environment";
import { base } from "$app/paths";

const withBase = (path: string) => `${base}${path}`;

const defaultNavPage = (page: "settings" | "about") => {
    if (browser && window.innerWidth <= 750) {
        return withBase(`/${page}`);
    }

    switch (page) {
        case "settings":
            return withBase("/settings/appearance");
        case "about":
            return withBase("/about/general");
    }
}

export { defaultNavPage, withBase };
