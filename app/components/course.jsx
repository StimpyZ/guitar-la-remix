import React from 'react'

export default function Course({course}) {

    const { title, content, image} = course
    const imageUrl = image.data.attributes.url

    return (
        <section className='curso'>
            <style jsx='true'>{`
                .curso {
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${imageUrl});
                }
            `}</style>
            <div className='contenedor curso-grid'>
                <div className='contenido'>
                    <h2 className='heading'>{title}</h2>
                    <p className='texto'>{content}</p>
                </div>
            </div>
        </section>
    )

}
