import './redes_sociais.css'

function Redes_Sociais(){
    return(
        <div className='container mt-3'>

           <i className="fa-brands fa-linkedin me-1"></i> 
           <a className="linkedin me-4" href="https://www.linkedin.com/in/talitacastrofreitas/">LinkedIn<i className=" fa-solid fa-arrow-up-right-from-square ms-2"></i>
           </a>
           

           <i className="fa-brands fa-github me-1"></i> 
           <a className="git me-4" href="https://github.com/talitacastrofreitas">Github<i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
           </a>
           
        </div>
    );
}

export default Redes_Sociais;