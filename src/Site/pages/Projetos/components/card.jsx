import { Link } from "react-router-dom";

function Card({ name, description, html_url}) {
  return (

    <div className="card mb-4" style={{ width: "100%" }}>
    
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text custom-clamp">{description}</p>
          <Link to={html_url} className="btn btn-dark">
            VER PROJETO
          </Link>
        </div>
      
    </div>
  );
}

export default Card;
