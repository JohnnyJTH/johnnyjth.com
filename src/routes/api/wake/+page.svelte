<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    onMount(async () => {
        await fetch("/api/wake", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: $page.url.searchParams.get("password"),
                mac: $page.url.searchParams.get("mac"),
            }),
        });
    });
</script>
