import { Link } from "@remix-run/react"
import { formatDate } from "../utils/helpers"

export default function Post({ posts }) {

    const {uuid, title, content, image, publishedAt } = posts

    return (
        <article className="post">
            <img src={image} className="imagen" alt={`Imagen del post ${title}`}/>
            <div className="contenido">
                <h1>{title}</h1>
                <p className="fecha">Publicado el {formatDate(publishedAt)}</p>
                <p className="resumen">{content}</p>
                <Link className="enlace" to={`/posts/${uuid}`}>Leer mas</Link>
            </div>
        </article>
    )

}
