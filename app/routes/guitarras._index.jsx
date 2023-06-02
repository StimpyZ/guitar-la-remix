import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitarras.server"
import ListadoGuitarra from "../components/listado-guitarra"

export function meta() {

    return [
        {title: 'GuitarLA - Tienda'},
        {description: 'Seccion de tienda de GuitarLA'},
    ]

}

export async function loader() {


    const guitars = await getGuitars()
    return guitars

}


function Tienda() {

    const guitars = useLoaderData()
    return (
        <ListadoGuitarra guitars={guitars} />
    )

}

export default Tienda