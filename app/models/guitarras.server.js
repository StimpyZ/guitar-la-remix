export async function getGuitars() {

    try {

        const response = await fetch(`${process.env.API_URL}/guitarras?populate=image`)
        const data = await response.json()

        return data.data.map(guitars => {

            return {
                id: guitars.id,
                uuid: guitars.attributes.url,
                name: guitars.attributes.name,
                description: guitars.attributes.description,
                price: guitars.attributes.price,
                image: guitars.attributes.image.data.attributes.formats.medium.url
            }
        
        })
    
    } catch (error) {

        throw new Error('Error en la llamada a la API')
    
    }


}

export async function getSingleGuitar (url) {
    
    try {

        const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`)
        const data = await response.json()
        return data.data.map(guitars => {

            return {
                id: guitars.id,
                uuid: guitars.attributes.url,
                name: guitars.attributes.name,
                description: guitars.attributes.description,
                price: guitars.attributes.price,
                image: guitars.attributes.image.data.attributes.formats.medium.url
            }
        
        })
    
    } catch (error) {

        throw new Error('Error en la llamada a la API')
    
    }

}