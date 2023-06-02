export async function getNosotros() {

    try {

        const response = await fetch(`${process.env.API_URL}/nosotro?populate=image`);
        const data = await response.json();
        return data.data.attributes;
    
    } catch (error) {

        throw new Error('Error en la llamada a la API');
    
    }

}