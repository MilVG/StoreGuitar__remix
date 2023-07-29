
import { useLoaderData} from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import Guitarra from '~/components/guitarra'
export function meta() {
    return [
        { title: 'GuitarLa - Tienda de Guitarras' },
        { description: 'GuitarLa - Nuestra coleción de Guitarras' }
    ]
}
export async function loader() {

    const guitarras = await getGuitarras()

    return guitarras.data
}
function Tienda() {
    const guitarras = useLoaderData()

    return (
        <div>
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
        </div>
    )
}

export default Tienda