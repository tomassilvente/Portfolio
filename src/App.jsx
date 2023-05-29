import { CardList } from "./components/CardList"
import { Proyects } from "./components/Proyects"
import { Navbar } from "./ui/Navbar"

export const App = () => {
  return (
    <div className="container text-center">
      <div className="blanco rounded mt-2 animate__animated animate__fadeIn">
      <Navbar />
        <h1 className="pt-4 titulo animate__animated animate__pulse">Tomás Silvente</h1>
        <hr />       
        <CardList/>
      </div>
      <div className="container mt-3 rounded blanco animate__animated animate__fadeIn">
        <h2 className="pt-4 titulo animate__animated animate__pulse">Proyectos</h2>
        <Proyects />
      </div> 
    </div>
  )
}
