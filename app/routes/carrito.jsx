
import { useOutlet, useOutletContext } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href:styles
        }
    ]
}
export function meta() {
    return [
        { title: 'GuitarLa - Carrito de Compras' },
        {description: 'Venta de guitarras, música, blog, carrito de compras, tienda'}
    ]
}
function Carrito() {
    const [total,setTotoal] = useState(0)
    const { carrito, actualizarcantidad, eliminarGuitarra } = useOutletContext()
    
    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        
        setTotoal(calculoTotal)
    }, [carrito])
    
    return (
        <ClientOnly fallback={'cargando..'}>
            {() => (
                <main className='contenedor'>
                    <h1 className='heading'> Carrito de Compras</h1>
            
                    <div className='contenido'>
                    <div className='carrito'>
                            <h2>Articulos</h2>
                            {carrito?.length === 0 ? 'carrito vacio' : (
                                carrito?.map(producto => (
                                    <div key={producto.id} className='producto'>
                                        <div> 
                                        <img src={producto.imagen} alt={`imagen del producto ${producto.nombre}`} />
                                        </div>
                                        <div>
                                            <p className='nombre'>{producto.nombre}</p>
                                            <p>Cantidad: </p>
                                            <select
                                                className='select'
                                                value={producto.cantidad}
                                                onChange={e => actualizarcantidad({
                                                    cantidad: +e.target.value,
                                                    id: producto.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            
                                            <p className='precio'>$<span>{producto.precio}</span></p>
                                            <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                        </div>

                                        <button
                                            type='button'
                                            className='btn_eliminar'
                                            onClick={() => eliminarGuitarra(producto.id)}
                                        >X</button>
                                    </div>
                                ))
                            )}
                    </div>
                    <aside className='resumen'>
                        <h3>Resumen del Pedido</h3>
                            <p>totoal a pagar: ${ total}</p>
                    </aside>
                    </div>
                </main>
            )}
        </ClientOnly>
  )
}

export default Carrito