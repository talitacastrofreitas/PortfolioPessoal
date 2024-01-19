import { useEffect, useState } from 'react';
import Card from './components/card';
import './projetos.css'
import Header from './components/header'

function Projetos(){

  // BUSCA AOS REPOSITORIOS DO GITHUB
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const buscarRepositorios = async () => {
      const resposta = await fetch('https://api.github.com/users/talitacastrofreitas/repos')
      const dados = await resposta.json()
      setRepositories(dados)
    }
    buscarRepositorios()
  }, [])



  return (
    <div>
    <Header />
    <div className="container mt-4">
      <h2 className="text-white mb-4">PROJETOS</h2>
      <div className="row">
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <div key={repo.id} className="col-lg-3 mb-3">
              <Card social_preview={repo.social_preview} name={repo.name} description={repo.description} html_url={repo.html_url} />
            </div>
          ))
        ) : (
          <p className='text-white'>Carregando repositorios...</p>
        )}
      </div>
    </div>
  </div>
  );
}

export default Projetos;