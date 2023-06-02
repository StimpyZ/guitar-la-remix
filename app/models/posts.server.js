export async function getBlog() {

    try {

        const response = await fetch(`${process.env.API_URL}/posts?populate=image`);
        const data = await response.json();
        return data.data.map(post => {

            return {
                id: post.id,
                uuid: post.attributes.url,
                title: post.attributes.title,
                content: post.attributes.content,
                image: post.attributes.image.data.attributes.formats.small.url,
                publishedAt: post.attributes.publishedAt
            };
        
        });
    
    } catch (error) {

        throw new Error('Error en la llamada a la API');
    
    }

}

export async function getSinglePost(url) {

    try {

        const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
        const data = await response.json()
        return data.data.map(post => {

            return {
                id: post.id,
                title: post.attributes.title,
                content: post.attributes.content,
                publishedAt: post.attributes.publishedAt,
                image: post.attributes.image.data.attributes.formats.medium.url
            }
        
        })
    
    } catch (error){

        throw new Error('Error en la llamada a la API')
    
    }

}