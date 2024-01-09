<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let version = "?";
    onMount(() => {
        const v = $page.url.searchParams.get("v");
        if (v) {
            version = v;
        }
    });
</script>

Opdateret til version {version}!
