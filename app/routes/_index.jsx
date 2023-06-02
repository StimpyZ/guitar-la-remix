import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "../models/guitarras.server"
import { getBlog } from "../models/posts.server"
import ListadoGuitarra from "../components/listado-guitarra"
import Course from "../components/course"
import ListadoPosts from "../components/listado-posts"
import { getCurso } from "../models/curso.server"
import styles from '~/styles/tienda.css'
import stylesBlog from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export function meta() {

    return [
        { title: 'GuitatLA - Inicio' },
        { description: 'Index de la pagina GuitarLA' },
    ]

}

export function links() {

    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'stylesheet',
            href: stylesBlog
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        }
    ]

}   

export async function loader() {

    const [guitars, posts, course] = await Promise.all([
        getGuitars(),
        getBlog(),
        getCurso()
    ])


    return { guitars, posts, course }

}

function Index() {

    const { guitars, posts, course } = useLoaderData()

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarra guitars={guitars} />
            </main>
            <Course course={course} />
            <section className="contenedor">
                <ListadoPosts posts={posts} />
            </section>
        </>
    )

}

export default Index