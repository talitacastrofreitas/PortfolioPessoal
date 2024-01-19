import "./home.css";
import talitaImage from "./Image/talita.jpg";
import Contato from '../Contato/index'
import RedesSociais from '../RedesSociais'

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <strong className="welcome">SEJA BEM-VINDO(A)!</strong>

          <h2 className="text-white mb-0">
            Olá, eu sou <span className="name-user">Talita Castro</span>
          </h2>
          <h6 className="funcao mt-0 mb-3">
            Analista de Desenv. de Sistemas Web Jr.
          </h6>

          <p className="text-white mb-5">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <Contato />
          <RedesSociais />
        </div>
{/* COLUNA 2 */}
        <div className="col-lg-6 img">
          <img className="profile" src={talitaImage} alt="usuario" />

<h4 className="mt-3 titulo">Principais Competências</h4>
          <div className="progress mb-3">
            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                <span className="sr-only">90% Complete</span>
            </div>
            <span className="progress-type ms-2">HTML / HTML5</span>
            <span className="progress-completed me-2">90%</span>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                <span className="sr-only">65% Complete</span>
            </div>
            <span className="progress-type ms-2">CSS / CSS3</span>
            <span className="progress-completed me-2">65%</span>
          </div>
          
          <div className="progress mb-3">
            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                <span className="sr-only">65% Complete</span>
            </div>
            <span className="progress-type ms-2">Bootstrap</span>
            <span className="progress-completed me-2">65%</span>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}>
                <span className="sr-only">35% Complete</span>
            </div>
            <span className="progress-type ms-2">React js</span>
            <span className="progress-completed me-2">35%</span>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                <span className="sr-only">40% Complete</span>
            </div>
            <span className="progress-type ms-2">Banco de Dados</span>
            <span className="progress-completed me-2">40%</span>
          </div>

          <div className="progress mb-3">
            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                <span className="sr-only">100% Complete</span>
            </div>
            <span className="progress-type ms-2">Figma (layout/protótipos)</span>
            <span className="progress-completed me-2">100%</span>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
