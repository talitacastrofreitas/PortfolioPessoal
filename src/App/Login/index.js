import { useState } from "react";
import "./login.css";

const Login = () => {
  const [action, setAction] = useState("Login");

  const handleSubmit = () => {
    // Implemente a lógica para manipular o envio do formulário
    if (action === "Login") {
      console.log("Fazer login");
    } else {
      console.log("Registrar");
    }
  };

  return (
    <div className="container login  mt-5">
      {/* TITULOS - BOTÕES*/}

      <div className="row justify-content-center align-items-center mb-4">
        <div className="col-md-6 text-center mb-2">
          <button
            className={
              action === "Sign Up" ? "submit gray ms-3" : "submit ms-3"
            }
            onClick={() => {
              setAction("Login");
            }}
          >
            {" "}
            Login{" "}
          </button>
        </div>

        <div className="col-md-6 text-center mb-2">
          <button
            className={action === "Login" ? "submit gray me-3" : "submit  me-3"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            {" "}
            Registrar
          </button>
        </div>
      </div>

      {/* FORMULARIO */}

      <div className="row justify-content-center align-items-center">
        <div className=" inputs col-md-10">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input form-floating mb-3">
              <input
                type="text"
                className="form-control focus-input"
                id="name"
                placeholder="exemple nome"
              />
              <label htmlhtmlhtmlFor="name">
                <i className="fa-solid fa-user me-2 ms-3"></i> Nome
              </label>
            </div>
          )}

          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="col-md-12">
              <div className="mb-4 mt-3">
                <span>Informe os dados para acesso ao sistema.</span>
              </div>
            </div>
          )}

          <div className="input form-floating  mb-3">
            <input
              type="email"
              className="form-control focus-input"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlhtmlhtmlFor="email">
              <i className="fa-solid fa-envelope me-2 ms-3"></i> E-mail
            </label>
          </div>

          <div className="input form-floating  mb-3">
            <input
              type="password"
              className="form-control focus-input"
              id="password"
              placeholder="senha123"
            />
            <label htmlhtmlhtmlFor="password">
              <i className="fa-solid fa-lock me-2 ms-3"></i> Senha
            </label>
          </div>

          {action === "Sign Up" ? (
            <div> </div>
          ) : (
            <div className="forgot-password text-end">
              Esqueceu sua senha? <span>Clique aqui!</span>
            </div>
          )}

          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-login btn-md"
              onClick={handleSubmit}
            >
              {action === "Login" ? "Entrar" : "Registrar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
