import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark color">
        <div className="container-fluid">
                <Link className="navbar-brand" to="/"> 💼  Portfolio</Link>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav fw-bold">
                        <li className="nav-item">
                            <Link className="nav-link active" to="https://www.linkedin.com/in/tomas-silvente-a4b1951b2/" target="_blank">Linkedin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="https://www.instagram.com/tomassilvente/" target="_blank">Instagram</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="https://github.com/tomassilvente" target="_blank">GitHub</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="src/assets/CV2.pdf" download="Tomas Silvente CV.pdf" target="_blank">Descargar CV</Link>
                        </li>
                    </ul>
                </div>
        </div>
     </nav>
  )
}
