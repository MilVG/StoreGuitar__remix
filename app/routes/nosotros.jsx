import React from 'react'
import imagen from '../../public/img/nosotros.jpg'
import nosotrosstyles from '../styles/nosotros.css'

export function meta() {
  return [
    {title: 'GuitarLa - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de música'}
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: nosotrosstyles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros