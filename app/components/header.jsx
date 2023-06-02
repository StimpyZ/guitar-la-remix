import { Link } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion"

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to='/' className="logo">
                    <img src={Logo} className="logo" alt="logo de la aplicacion"/>
                </Link>
                <Navegacion />
            </div>
        </header>
    )

}

export default Header