import { Link } from "react-router-dom"

export const AppsCard = ({title, subtitle, detail, link, action}) => {
  return (
        <div className='col animate__animated animate__zoomInDown'>
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
              <p className="card-text">{detail}</p>
              <Link to={link} target="_blank" className="card-link">{action}</Link>
            </div>
          </div>
        </div>
    )
}