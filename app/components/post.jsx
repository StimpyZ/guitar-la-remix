import { Link } from "@remix-run/react"
import { formatDate } from "../utils/helpers"
import { useEffect, useState } from "react"

export default function Post({ posts }) {

    const {uuid, title, content, image, publishedAt } = posts

    const [date, setDate] = useState(null)

    useEffect(() => {

        setDate(formatDate(publishedAt))
    
    }, [])

    return (
        <article className="post">
            <img src={image} className="imagen" alt={`Imagen del post ${title}`}/>
            <div className="contenido">
                <h1>{title}</h1>
                <p className="fecha">Publicado el {date}</p>
                <p className="resumen">{content}</p>
                <Link className="enlace" to={`/posts/${uuid}`}>Leer mas</Link>
            </div>
        </article>
    )

}
