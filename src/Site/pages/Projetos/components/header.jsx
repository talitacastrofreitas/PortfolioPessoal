import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav className= "navbar navbar-expand-lg bg-dark border-bottom border-body " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Portfólio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Início</Link>
              </li>
              <li className="nav-item">
                <Link to="../Projetos" className="nav-link">Projetos</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Contato</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Redes sociais</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;