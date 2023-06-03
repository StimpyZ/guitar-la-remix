import { useLoaderData, useNavigate, useOutletContext } from "@remix-run/react"
import { useId, useState } from "react"
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

    const selectId = useId()
    const [quantity, setQuantity] = useState(0)
    const guitars = useLoaderData()
    const {description, name, price, image, id} = guitars[0]
    const {addToCart} = useOutletContext()
    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        if (quantity === 0) {

            alert('Seleccione una cantidad')
            return
        
        }

        const selectedGuitar = {
            id,
            image,
            name,
            price,
            quantity
        }

        addToCart(selectedGuitar)
        navigate('/cart')
    
    }

    return (
        <div className="guitarra">
            <img src={image} className="imagen-guitarra" alt={`Imagen de la guitarra ${name}`}/>

            <div className="contenido">
                <h3>{name}</h3>
                <p className='texto'>{description}</p>
                <p className="precio">${price}</p>

                <form 
                    onSubmit={handleSubmit}
                    className="formulario">
                    <label htmlFor={selectId}>Cantidad</label>
                    <select 
                        onChange={e => setQuantity(Number(e.target.value))}
                        id={selectId}>
                        <option value=''>-- Seleccione --</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                    <input 
                        type="submit"
                        value='Agregar al carrito'
                    />
                </form>
            </div>
        </div>
    )

}