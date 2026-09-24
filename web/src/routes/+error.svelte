<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { defaultNavPage } from "$lib/subnav";

    onMount(() => {
        if (page.error?.message === "Not Found") {
            const pathname = page.url.pathname.slice(base.length) || "/";
            if (pathname.startsWith("/settings")) {
                goto(defaultNavPage("settings"), { replaceState: true });
            } else if (pathname.startsWith("/about")) {
                goto(defaultNavPage("about"), { replaceState: true });
            } else {
                goto(`${base}/`, { replaceState: true });
            }
        }
    });
</script>
