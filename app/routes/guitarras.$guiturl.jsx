import React, { useState } from 'react'
import { getGuitarra } from '~/models/guitarras.server';
import { useLoaderData, useOutletContext} from '@remix-run/react';

export async function loader({ params }) {

    const { guiturl } = params

    const guitarra = await getGuitarra(guiturl)

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText:'GuitarLa - Guitarra No Encontrada'
        })
    }
    return guitarra
}
export function meta({ data }) {
    if (!data) {
        return [
            { title: 'guitarra no encontrada' },
            {description:'guitarras, Venta de Guitarra, Guitarra no encontrada'}
            
        ]
    }
    return [
        { title: `GuitarLa - ${data.data[0].attributes.nombre}` },
        { description: `guitarras, Venta de Guitarra ${data.data[0].attributes.nombre}`}
    ]
}

function Guitarrasurl() {
    const { agregarCarrito } = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
    
    

    const handleSubmit = e => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('Debes selecionar una cantidad')
            return
        }

        const  guitarraSelecionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSelecionada)
        
    }
  return (
    <div className='guitarra'>
          <img src={imagen.data.attributes.url} alt={`Imagen de La guitarra ${nombre}`} className='imagen' />
          
          <div className='contenido'>
              <h3>{nombre}</h3>
              <p className='text'>{descripcion}</p>
              <p className='precio'>${precio}</p>
              
              <form onSubmit={handleSubmit} className='formulario'>
                  <label >Cantidad</label>

                  <select 
                    onChange={e =>setCantidad(parseInt(e.target.value))}
                    id='cantidad'
                  
                  >
                      <option value="">--Seleccione --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>

                  <input type="submit" value="Agregar al carrito" />
              </form>
          </div>
    </div>
  )
}

export default Guitarrasurl