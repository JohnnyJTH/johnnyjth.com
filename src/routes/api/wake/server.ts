import { HOME_ASSISTANT, WAKE_PASSWORD } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    return new Response("This is the wake API", { status: 200 });
}

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();
    if (!body) return new Response("Request body is missing", { status: 400 });
    if (!body.password) return new Response("Password is missing", { status: 400 });
    if (body.password !== WAKE_PASSWORD) return new Response("Wrong password", { status: 401 });
    if (!body.mac) return new Response("MAC address is missing", { status: 400 });

    const resp = await fetch("https://home.johnnyjth.com/api/services/wake_on_lan/send_magic_packet", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${HOME_ASSISTANT}` }, body: JSON.stringify({ mac: body.mac }) })
    if (!resp.ok) return new Response("Error sending magic packet", { status: 500 });
    return new Response("Success", { status: 200 });
};