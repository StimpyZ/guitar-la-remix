export async function getCurso() {

    try {

        const response = await fetch(`${process.env.API_URL}/course?populate=image`)
        const data = await response.json()
        return data.data.attributes
    
    }catch(error){

        throw new Error('Error al obtener los cursos')
    
    }

}