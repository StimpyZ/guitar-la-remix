import styles from '~/styles/nosotros.css'
import { getNosotros } from '../models/nosotros.server'
import { useLoaderData } from '@remix-run/react'

export function meta() {

    return [
        {title: 'GuitarLA - Sobre Nosotros'},
        {description: 'Venta de guitarras, blog, cursos y más.'},
    ]

}

export function links() {

    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]

}

export async function loader() {

    const nosotros = await getNosotros()
    return nosotros

}

function Nosotros() {

    const nosotros = useLoaderData()
    const imageUrl = nosotros.image.data[0].attributes.formats.medium.url

    return (
        <main className="contenedor nosotros">
            <h2 className="heading"> Nosotros</h2>

            <div className="contenido">
                <img src={imageUrl} alt='Imagen sobre nosotros'/>
                <div>
                    <p>{nosotros.content}</p>
                </div>
            </div>
        </main>
    )

}

export default Nosotros