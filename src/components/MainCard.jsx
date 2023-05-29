export const Card = ({image, title, text}) => {
  return (
    <div className='col '>
        <div className="card h-100 ">
            <div className='row no-gutters'>
                <div className=''>
                    <img src={image} className="rounded carta img-thumbnail card-img-top" alt="..." />
                </div>
                <div className=''>
                    <div className="card-body">
                        <h5 className="card-title ">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
