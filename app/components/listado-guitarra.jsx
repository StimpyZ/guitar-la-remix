import React from 'react'
import Guitarra from './guitarra'

export default function ListadoGuitarra({guitars}) {

    return (
        <>
            <h2 className="heading">Nuestra Colección</h2>
            {guitars?.length && (
                <div className="guitarras-grid">
                    {guitars.map(guitar => (
                        <Guitarra
                            key={guitar?.id}
                            guitars={guitar}
                        />
                    ))}
                </div>
            )}
        </>
    )

}
