
import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getcurso } from "~/models/curso.server";
import Guitarra from '~/components/guitarra'
import Post from '~/components/post'
import Curso from '~/components/curso'
/*styles */
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
export function meta() {
  
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {

  const [guitarras, posts,curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getcurso()
  ])
  
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}
function Index() {

  const {guitarras,posts,curso} = useLoaderData()
  
  return (
    <>
      <main className='contenedor'>
        <h2 className='heading'>Nuestra Colección</h2>

        {guitarras.length && (
          <div className='guitarras-grid'>
            {guitarras.map(guitarra => (
              <Guitarra
                key={guitarra?.id}
                guitarra={guitarra?.attributes}
              />
            ))}
          </div>
        )}
      </main>
      <Curso
        curso={curso.attributes}
      />

      <section className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className='blog'>
          {posts.map(post => (
            <Post
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Index