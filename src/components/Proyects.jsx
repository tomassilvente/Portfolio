import { AppsCard } from "./AppsCard"

export const Proyects = () => {
  return (
    <div className="row p-3 " >
          <AppsCard className='col-4 animate__animated animate__zoomInDown'
            title='GifExpert App'
            subtitle='Entrega 10 Gifs'
            detail='Pequeña App hecha con hooks y API externa para poner en práctica ambos conceptos.'
            link='https://tomassilvente.github.io/react-gifExpert/' 
            action='IR'/>
          <AppsCard className='col-4'
            title='Libreta de Clientes'
            subtitle='Almacena datos de clientes'
            detail='App que permite tenes una base de datos con nombre, telefono y empresa de contactos o clientes habituales en el trabajo.'
            link='src/assets/libreta-clientes.exe' 
            action='Descargar'/>
          <AppsCard className='col-4'
            title='Gestor de Tareas'
            subtitle='Clasica TODO-list'
            detail='Pequeña App hecha con Python y flask.'
            link='src/assets/Gestor.exe' 
            action='Descargar'/>
    </div>
  )
}
