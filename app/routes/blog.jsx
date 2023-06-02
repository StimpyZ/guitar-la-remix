import { useLoaderData } from "@remix-run/react"
import { getBlog } from "../models/posts.server"
import styles from '~/styles/blog.css'
import ListadoPosts from "../components/listado-posts"

export function meta() {

    return [
        {title: 'GuitatLA - Blog'},
        {description: 'Blog de GuitatLA'},
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

    const posts = await getBlog()
    return posts

}


export default function Blog() {

    const posts = useLoaderData()

    return (
        <main className="contenedor">
            <ListadoPosts posts={posts} />
        </main>
    )

}