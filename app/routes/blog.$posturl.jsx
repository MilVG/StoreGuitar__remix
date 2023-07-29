import { useLoaderData } from "@remix-run/react"
import { getpost } from "~/models/posts.server"
import { formatearfecha } from '~/utils/helpers'



export function meta({ data }) {
  if (!data) {
    return [
      { title: 'Entrada no Encontrada' },
      { description: 'guitarras, Venta de Guitarra, Entrada no encontrada' }

    ]
  }
  return [
    { title: `GuitarLa - ${data.data[0].attributes.titulo}` },
    { description: `Guitarras, Venta de Guitarra, entrada ${data.data[0].attributes.titulo}` }
  ]
}

export async function loader({params}) {
  const { posturl } = params
  const post = await getpost(posturl)
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no Encontrada'
    })
  }
  
  return post
}

function Postsurl() {
  const post = useLoaderData()
  
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
  return (
    <article className='contenedor post mt-3'>
      <img src={imagen.data?.attributes?.url} alt={`imagen blog ${titulo}`} className='imagen' />

      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearfecha(publishedAt)}</p>
        <p className='text'>{contenido}</p>
      </div>
    </article>
  )
}

export default Postsurl