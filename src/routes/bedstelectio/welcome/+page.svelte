<script lang="ts">
    import { onMount } from "svelte";

    let version = "?";
    onMount(async () => {
        const res = await fetch("https://addons.mozilla.org/api/v5/addons/addon/bedstelectio/versions/");
        const content = await res.json();
        version = content?.results?.[0]?.version ?? "?";
    });
</script>

<div class="relative isolate overflow-hidden">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-black/20 mask" aria-hidden="true"><defs><pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-100"><path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect></svg>
    <div class="absolute left-half-base top-10 -z-10 scale-100 blur-3xl sm:left-half-small lg:top-half-large" aria-hidden="true"><div class="w-[70rem] bg-gradient-to-r from-bl-primary to-bl-secondary" style="aspect-ratio: 1108/632; clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%);"></div></div>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div class="mt-24 sm:mt-32 lg:mt-16">
                <a href="/bedstelectio/updated?v={version}" class="inline-flex space-x-6">
                    <span class="rounded-full bg-bl-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-bl-primary border border-bl-primary">Nyheder</span>
                    <span class="inline-flex items-center space-x-2 font-sm font-medium leading-6 text-gray-700">
                        <span>Nyeste version v{version}!</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                    </span>
                </a>
            </div>
            <h1 class="mt-10 text-4xl font-bold tracking-tight md:text-6xl">Velkommen til BedsteLectio!</h1>
            <p class="mt-6 text-lg leading-8 text-gray-700">Start med at åbne Lectio op som normalt og se, om det ser normalt ud. Hvis det gør, er du nødt til at sætte udvidelsen op først.</p>
            <div class="mt-10 flex items-center gap-x-6">
                <a href="https://www.lectio.dk/" target="_blank" rel="noreferrer" class="rounded-md bg-bl-primary hover:bg-bl-primary-hover px-3 py-2 text-sm font-semibold transition-colors">Gå til Lectio</a>
                <a href="#setup" class="text-sm font-semibold leading-8">Sæt op <span aria-hidden="true">↓</span></a>
            </div>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img src="/img/bedstelectio.png" class="w-[76rem] rounded-md bg-gray-100 shadow-xl border border-black/10" alt="BedsteLectio UI" />
            </div>
        </div>
    </div>
</div>
<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
        <h2 id="setup" class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sæt op</h2>
        <p>For at udvidelsen kan ændre dit Lectios udseende, skal du først give den lov til dette. Billedet er fra Firefox, men processen plejer at være næsten identisk på alle browsere.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
        <div class="flex flex-col max-lg:space-y-8 lg:flex-row lg:justify-between">
            <div>
                <span class="font-semibold leading-7">Trin</span>
                <ol class="list-decimal list-inside marker:text-gray-700">
                    <li class="mt-4">Klik på <span class="font-semibold">"udvidelser" ikonet</span> i din browser.</li>
                    <li class="mt-4">Højreklik <span class="font-semibold">BedsteLectio</span> i listen.</li>
                    <li class="mt-4">Klik på <span class="font-semibold">"Altid tillad adgang"</span> i popuppen.</li>
                    <li class="mt-4">Genindlæs Lectio.</li>
                </ol>
            </div>
            <img src="/img/bedstelectio-setup.png" class="w-96 rounded-md bg-gray-100 shadow-xl border border-black/10" alt="BedsteLectio setup" />
        </div>
    </div>
</div>

<style>
    .mask {
        -webkit-mask-image: radial-gradient(100% 100% at top right, white, transparent);
        mask-image: radial-gradient(100% 100% at top right, white, transparent);
    }
</style>
