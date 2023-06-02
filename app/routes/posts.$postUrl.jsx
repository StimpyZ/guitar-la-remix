import { useLoaderData } from "@remix-run/react"
import { getSinglePost } from "../models/posts.server"
import { formatDate } from "../utils/helpers"
import styles from '~/styles/blog.css'
import { useEffect, useState } from "react"

export function meta({data}){

    if(!data) {
            
        return [
            {title: 'GuitatLA - Post no encontrado'},
            {description: 'Post de GuitatLA'},
        ]
    
    }

    return [
        {title: `GuitatLA - ${data[0].title}`},
        {description: 'Blog de GuitatLA'},
    ]

}

export function links(){
    
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]

}

export async function loader({ params }) {

    const { postUrl } = params
    const posts = await getSinglePost(postUrl)

    if (posts.length === 0) {

        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    
    }
    return posts

}

export default function Post() {

    const posts = useLoaderData()
    const { title, content, image, publishedAt } = posts[0]
    const [date, setDate] = useState(null)

    useEffect(() => {

        setDate(formatDate(publishedAt))
    
    }, [])
    


    return (
        <article className="contenedor post-single">
            <img src={image} className="imagen-post" alt={`Imagen del post ${title}`}/>
            <div className="contenido">
                <h3>{title}</h3>
                <p className="fecha">Publicado el {date}</p>
                <ul>
                    {
                        content.split('\n').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )

}
