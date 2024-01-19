import './contato.css'

function Contato() {
  return (
    <div className="container mt-2">
      <div className="email">
        <i>
          <i className="fa-solid fa-envelope"></i> E-mail:
          talitacastrofreitas@gmail.com
        </i>
      </div>

      <div className="telefone">
        <i><i className="fa-brands fa-whatsapp"></i> Telefone: (71) 99411-8157</i>
      </div>
    </div>
  );
}

export default Contato;
