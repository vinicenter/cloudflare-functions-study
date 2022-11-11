export async function onRequestGet({ request }) {
  return new Response(`GET request received at ${request.url}`);
}

export async function onRequestPost({ request }) {
  console.log(request);

  return new Response(`POST request received at`);
}
