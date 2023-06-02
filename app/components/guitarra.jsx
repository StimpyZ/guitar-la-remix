import { Link } from '@remix-run/react'
import React from 'react'

export default function Guitarra({ guitars }) {

    const {description, name, price, image, uuid} = guitars

    return (
        <div className='guitarra'>
            <div className='guitarra-img'>
                <img src={image} alt={`Imagen de la guitarra ${name}`}/>
            </div>
            <div className='contenido'>
                <h3>{name}</h3>
                <p className='description'>{description}</p>
                <p className='precio'>${price}</p>

                <Link to={`/guitarras/${uuid}` }className='enlace'>Ver mas</Link>
            </div>
        </div>
  
    )

}
