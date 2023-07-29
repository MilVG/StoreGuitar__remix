export async function getPosts() {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?populate=imagen`
  );
  return resultado = await respuesta.json();
}

export async function getpost(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );

  return await respuesta.json();
}