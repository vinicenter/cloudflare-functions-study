export async function onRequestGet({ request }) {

  return new Response(`GET request received at ${request.url}`);
}

export async function onRequestPost({ request }) {

  return new Response(`POST request received at ${request.url}`);
}
