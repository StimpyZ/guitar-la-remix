import { useLoaderData } from "@remix-run/react"
import { getSingleGuitar } from "~/models/guitarras.server"

export function meta({ data }) {

    if (data) {

        return [
            {title: `GuitarLA - ${data[0].name}`},
            {description: `Guitaarra de GuitarLA ${data[0].name}`},
        ]
    
    } else {

        return [
            {title: 'GuitarLA - Guitarra no encontrada'},
            {description: 'GuitarLA - Guitarra no encontrada'},
        ]
    
    }

}

export async function loader ({ params }) {

    const {guitarraUrl} = params
    const guitars = await getSingleGuitar(guitarraUrl)
    if (guitars.length === 0) {

        throw new Response('',{
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    
    }
    return guitars

}

export default function Guitarra() {

    const guitars = useLoaderData()
    const {description, name, price, image} = guitars[0]
    return (
        <div className="guitarra">
            <img src={image} className="imagen-guitarra" alt={`Imagen de la guitarra ${name}`}/>

            <div className="contenido">
                <h3>{name}</h3>
                <p className='texto'>{description}</p>
                <p className="precio">{price}</p>
            </div>
        </div>
    )

}