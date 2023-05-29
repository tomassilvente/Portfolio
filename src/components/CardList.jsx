import { Card } from "./MainCard"

export const CardList = () => {
  return (
    <div  className="row p-3 animate__animated animate__pulse">
        <Card
            className='col-4' 
            image={'/src/assets/IMG_2538.jpg'} 
            title={'Quien soy'} 
            text={'Me llamo Tomás Silvente, tengo 24 años. Soy de Punta Alta, Prov. BsAs. Apasionado por la computación, la programación y los videojuegos.'}/>
          <Card
            className='col-4 '
            image={'/src/assets/prog.png'}
            title={'Estudios'}
            text={'Recibido de Técnico en Redes Informáticas en 2021. Últimos finales para ser Analista en Sistemas. Cursos terminados en Udemy sobre React & Python, actualmente cursando curso de BackEnd en CoderHouse y curso de React(MERN) en Udemy'} />
          <Card
            className='col-4'
            image={'/src/assets/mozo.jpg'}
            title={'Experiencia'}
            text={'🤵🏻‍♂️ [Encargado, Brujas Pub, Punta Alta (06/19-10/20)] 🤵🏻‍♂️ [Encargado y Mozo , Club de Golf Puerto Belgrano (03/21 - 10/21)]. 🤵🏻‍♂️ [Service Support - Mozo, Big Sky, Montana, Estados Unidos]'} />
    </div>
  )
}


