import { useOutletContext } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/cart.css'

export function links() {

    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]

}

export function meta() {

    return [
        { title: 'GuitarLA - Carrito de compras' },
        { name: 'description', content: 'Carrito de compras de GuitarLA' }
    ]

}

export default function Cart() {

    const [total, setTotal] = useState(0)
    const { cart, updateQuantity, deleteGuitar } = useOutletContext()

    useEffect(() => {

        const total = cart.reduce((acc, item) => {

            return acc + item.price * item.quantity
        
        }, 0)

        setTotal(total.toFixed(2))
    
    }, [cart])

    return (
        <ClientOnly fallback={'Cargando...'}>
            {() => (
                <main className="contenedor">
                    <h1 className="heading">Carrito de compras</h1>

                    <div className="contenido">
                        <div className="carrito">
                            <h2>Articulos</h2>

                            {cart?.length === 0
                                ? 'Carrito vacio'
                                : cart?.map((guitar) => (
                                    <div key={guitar.id} className="producto">
                                        <div>
                                            <img
                                                src={guitar.image}
                                                alt={`Guitarra ${guitar.name}`}
                                            />
                                        </div>

                                        <div className="content">
                                            <p className="nombre">
                                                {guitar.name}
                                            </p>
                                            <p className="cantidad">
                                                  Cantidad
                                            </p>
                                            <select
                                                value={guitar.quantity}
                                                className="select"
                                                onChange={(e) =>
                                                    updateQuantity({
                                                        quantity: Number(
                                                            e.target.value
                                                        ),
                                                        id: guitar.id
                                                    })
                                                }
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <p className="precio">
                                                  $<span>{guitar.price}</span>
                                            </p>
                                            <p className="subtotal">
                                                  Subtotal:{' '}
                                                <span>
                                                      $
                                                    {(
                                                        guitar.quantity *
                                                          guitar.price
                                                    ).toFixed(2)}
                                                </span>
                                            </p>
                                        </div>
                                        <button
                                            onClick={() =>
                                                deleteGuitar(guitar.id)
                                            }
                                            type="button"
                                            className="btn-eliminar"
                                        >
                                              Eliminar
                                        </button>
                                    </div>
                                ))}
                        </div>

                        <aside className="resumen">
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: ${total}</p>
                        </aside>
                    </div>
                </main>
            )}
        </ClientOnly>
    )

}
