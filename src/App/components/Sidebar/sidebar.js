import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import talitaImage from "../../../Site/pages/Home/Image/talita.jpg";

// CONTEÚDO
import Dashboard from "../Conteudo/dashboard/dashboard";
import Conta from "../Conteudo/conta/conta";
import Trabalhos from "../Conteudo/trabalhos/trabalhos";
import Skills from "../Conteudo/skills/skills";
import Configuracoes from "../Conteudo/configuracoes/config";

const Sidebar = () => {

  // FUNÇÕES
  const [expandido, setExpandido] = useState(false);
  const [telaPequena, setTelaPequena] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState("dashboard");

  useEffect(() => {
    const verificarTamanhoTela = () => {
      setTelaPequena(window.innerWidth <= 768); 
    };

    verificarTamanhoTela();

    window.addEventListener("resize", verificarTamanhoTela);

    return () => {
      window.removeEventListener("resize", verificarTamanhoTela);
    };
  }, []);

  const alternarExpansao = () => {
    setExpandido(!expandido);
  };

  const handleLinkClick = (secao) => {
    setSecaoAtiva(secao);
  };
// END FUNÇÕES
  return (
    <div className={`d-flex  sidebar ${expandido ? "expandido" : ""}`}>
      <div className="bg-dark" id="sidebar">
        <div className="row">
          <div className="list-group list-group-flush mb-5">
            <div
              className={`container col-md-10 mt-4 ${
                expandido ? "sidebar-expandido" : "sidebar-fechado"
              }`}
            >
              <div
                className={`header-side ${
                  expandido ? "header-expandido" : "header-fechado"
                }`}
              >
                {/* LOGO */}
                <img className="img-logo ms-2 me-2" src={logo} alt="logo" />
                {expandido && <span className="text-white h5">Portfólio</span>}
              </div>
              {/* BARRA DE PESQUISA */}
              <div className="input-group mb-3 ms-2">
                {expandido && (
                  <input
                    type="text"
                    className="form-control focus-input-side"
                    placeholder="Pesquisar"
                    aria-label="Pesquisar"
                    aria-describedby="basic-addon2"
                  />
                )}
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              {/* LINKS MENU*/}
              <div className={`menus ${telaPequena ? "text-center" : ""}`}>
                <ul
                  className={`links-sidebar ${
                    telaPequena ? "d-flex flex-column align-items-center" : ""
                  }`}
                >
                  <li className="link">
                    <Link
                      to="#"
                      className="btn-side  ms-3"
                      onClick={() => handleLinkClick("dashboard")}
                    >
                      <i className="icon-side fa-solid fa-gauge me-3 mb-3 mt-3"></i>
                      {telaPequena ? null : (
                        <span className="texto-lateral">Dashboard</span>
                      )}
                    </Link>
                  </li>

                  <li className="link">
                    <Link
                      to="#"
                      className="btn-side  ms-3"
                      onClick={() => handleLinkClick("conta")}
                    >
                      <i className="icon-side fa-solid fa-user me-3 mb-3 mt-3"></i>
                      {telaPequena ? null : (
                        <span className="texto-lateral">Conta</span>
                      )}
                    </Link>
                  </li>

                  <li className="link">
                    <Link
                      to="#"
                      className="btn-side  ms-3"
                      onClick={() => handleLinkClick("trabalhos")}
                    >
                      <i className="icon-side fa-solid fa-briefcase me-3 mb-3 mt-3"></i>
                      {telaPequena ? null : (
                        <span className="texto-lateral">Trabalhos</span>
                      )}
                    </Link>
                  </li>

                  <li className="link">
                    <Link
                      to="#"
                      className="btn-side  ms-3"
                      onClick={() => handleLinkClick("skills")}
                    >
                      <i className="icon-side fa-solid fa-pen-nib me-3 mb-3 mt-3"></i>
                      {telaPequena ? null : (
                        <span className="texto-lateral">Soft skills</span>
                      )}
                    </Link>
                  </li>

                  <li className="link">
                    <Link
                      to="#"
                      className="btn-side ms-3"
                      onClick={() => handleLinkClick("configuracoes")}
                    >
                      <i className="icon-side fa-solid fa-gear me-3 mb-3 mt-3"></i>
                      {telaPequena ? null : (
                        <span className="texto-lateral">Configurações</span>
                      )}
                    </Link>
                  </li>
                  {/* FOOTER */}
                  <li
                    className={`footer-side mb-3 ${
                      expandido ? "expanded-footer" : ""
                    }`}
                  >
                    <div
                      className={`d-flex ${
                        !expandido || telaPequena
                          ? "justify-content-center align-items-center text-center"
                          : "justify-content-end"
                      }`}
                    >
                      {expandido && !telaPequena && (
                        <>
                          <img
                            className="img-usuario mb-3"
                            src={talitaImage}
                            alt="user"
                          />
                          <span className="ms-2 text-white h6 mt-2">
                            Talita Castro Freitas
                          </span>
                        </>
                      )}
                      {expandido && telaPequena && (
                        <img
                          className=" img-usuario mx-auto"
                          src={talitaImage}
                          alt="user"
                        />
                      )}
                      {!expandido && (
                        <img
                          className={`ms-2 img-usuario ${
                            telaPequena ? "mx-auto" : ""
                          }`}
                          src={talitaImage}
                          alt="user"
                        />
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NAV */}
      <div className="flex-grow-1" id="content">
        <nav
          className={`navbar bg-dark navbar-side ${
            expandido ? "expandido" : ""
          }`}
        >
          <div className={`container-fluid ${expandido ? "px-2" : ""}`}>
            <Link className="navbar-brand me-3 text-white" to="#">
              <span className="ms-4" onClick={alternarExpansao}>
                <i className="fa-solid fa-bars"></i>
              </span>
            </Link>
            <Link to="/app">
              <i className="text-white me-3 fa-solid fa-power-off"></i>
            </Link>
          </div>
        </nav>
        <div className="flex-grow-1" id="content">
          <div className="conteudo-side px-3 mt-3">

            {/* CONTEÚDO */}

            {secaoAtiva === "dashboard" && <Dashboard />}
            {secaoAtiva === "conta" && <Conta />}
            {secaoAtiva === "trabalhos" && <Trabalhos />}
            {secaoAtiva === "skills" && <Skills />}
            {secaoAtiva === "configuracoes" && <Configuracoes />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
