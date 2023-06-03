import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link,
    useNavigate
} from '@remix-run/react'
import Header from '~/components/header'
import Footer from './components/footer'
import Svg from './components/svg'
import styles from '~/styles/index.css'
import error from '~/styles/error.css'
import { useEffect, useState } from 'react'

export function meta() {

    return [
        { title: 'GuitatLA - Remix' },
    ]

}

export function links() {

    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: error
        }
    ]

}

export default function App() {

    const cartLS =
    typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('cart')) ?? []
        : [];

    const [cart, setCart] = useState(cartLS)
    
    useEffect(() => {

        if (typeof window !== 'undefined') {

            localStorage.setItem('cart', JSON.stringify(cart))
        
        }
    
    }, [cart])
    

    const addToCart = guitar => {

        const guitarInCart = cart.findIndex(item => item.id === guitar.id)


        if (guitarInCart >= 0) {

            const newCart = cart.slice()
            newCart[guitarInCart].quantity = guitar.quantity
            setCart(newCart)
        
        } else {

            setCart(prevState => [
                ...prevState,
                {
                    ...guitar,
                    quantity: guitar.quantity
                }
            ])
        
        }
    
    }

    const updateQuantity = (guitar) => {

        const updateCart = cart.map(guitarraState => {

            if (guitarraState.id === guitar.id) {

                guitarraState.quantity = guitar.quantity
            
            }
            return guitarraState
        
        })

        setCart(updateCart)
    
    }

    const deleteGuitar = id => {

        if (confirm('¿Desea eliminar el producto?')) {
            
            const updateCart = cart.filter(guitar => guitar.id !== id)
            setCart(updateCart)
        
        }
    
    }
    return (
        <Document>
            <Outlet
                context={{
                    addToCart,
                    cart,
                    updateQuantity,
                    deleteGuitar
                }}
            />
        </Document>
    )

}

function Document({ children }) {

    return (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )

}

export function ErrorBoundary() {

    const error = useRouteError()
    const navigate = useNavigate()  

    const goBack = () => {

        navigate(-1)
    
    }
    
    if (isRouteErrorResponse(error)) {

        return (
            <Document>
                <div className='conetendor-error'>
                    <Svg />
                    <div className="message-box">
                        <h1>¡Oh no!</h1>
                        <h2>{error.status}</h2>
                        <p className="error">
                            {error.statusText}
                        </p>
                        <div className="buttons-con">
                            <div className="action-link-wrap">
                                <button
                                    onClick={goBack}
                                    className="link-button link-back-button"
                                >
                      Go Back
                                </button>
                                <Link  
                                    to='/'
                                    className="link-button">
                      Go to Home Page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Document>
        )
    
    }

}
