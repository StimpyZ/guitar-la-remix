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

export function meta() {

    return [
        { charset: 'utf-8' },
        { title: 'GuitatLA - Remix' },
        { viewport: 'width=device-width,initial-scale=1.0' }
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

    return (
        <Document>
            <Outlet />
        </Document>
    )

}

function Document({ children }) {

    return (
        <html lang="es">
            <head>
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
