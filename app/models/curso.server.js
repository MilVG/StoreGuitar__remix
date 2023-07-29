import { Await } from "@remix-run/react";

export async function getcurso() {
    const respuesta = await fetch(
      `${process.env.API_URL}/curso?populate=imagen`
    );

    return await respuesta.json()
}