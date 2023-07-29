import { Link } from '@remix-run/react'
import { formatearfecha } from '~/utils/helpers'


function Post({ post }) {
    const { contenido, imagen, titulo, url, publishedAt } = post
    
  return (
     <article className='post'>
          <img src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} className='imagen' />
          
          <div className='contenido'>
              <h3>{titulo}</h3>
              <p className='fecha'>{ formatearfecha(publishedAt)}</p>
              <p className='resumen'>{contenido}</p>
              <Link className='enlace' to={`/blog/${url}`}>Leer Post</Link>
          </div>
     </article>
  )
}

export default Post