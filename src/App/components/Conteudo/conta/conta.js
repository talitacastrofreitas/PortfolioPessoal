import React, { useEffect } from 'react';
import './conta.css';

const Conta = () => {
  useEffect(() => {
    const forms = document.querySelectorAll('.needs-validation');

    const handleFormSubmit = (event) => {
      const form = event.target;

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    };

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', handleFormSubmit, false);
    });

    return () => {
      Array.from(forms).forEach(form => {
        form.removeEventListener('submit', handleFormSubmit, false);
      });
    };
  }, []);

  return (
    <div className='container-fluid container-conta mt-5'>
    <form className="row g-2 needs-validation" noValidate>
      <div className="form-floating form-floating col-md-4">
    <input type="text" className="form-control mb-3 mb-3 focus-input" id="validationCustom01" disabled value="Talita" required/>
    <label htmlFor="validationCustom01" className="form-label">Nome</label>
    
    <div className="valid-feedback">
    Parece bom
    </div>
  </div>
  <div className="form-floating col-md-4">
    
    <input type="text" className="form-control mb-3 focus-input" id="validationCustom02" disabled value="Castro Freitas" required/>
    <label htmlFor="validationCustom02" className="form-label">Sobrenome</label>
    <div className="valid-feedback">
    Parece bom
    </div>
  </div>
  <div className="form-floating col-md-4">
  <input type="email" className="form-control mb-3 focus-input" id="validationCustomEmail" aria-describedby="inputGroupPrepend" disabled value="talitacastrofreitas@gmail.com" required/>
      <label htmlFor="validationCustomEmail" className="form-label">E-mail</label>
    <div className="input-group has-validation">
      <div className="invalid-feedback">
      Parece bom
      </div>
    </div>
  </div>
  
  <div className="form-floating col-md-6">
    <input type="text" className="form-control mb-3 focus-input" id="validationCustom03" required/>
    <label htmlFor="validationCustom03" className="form-label">Cidade</label>
    <div className="invalid-feedback">
    Forneça uma cidade válida.
    </div>
  </div>
  <div className="form-floating col-md-3">
   
    <select className="form-select focus-input" id="validationCustom04" required>
      <option active="true" value="Choose">Selecione</option>
      <option>Acre (AC)</option>
      <option>Alagoas (AL)</option>
      <option>Amapá (AP)</option>
      <option>Amazonas (AM)</option>
      <option>Bahia (BA)</option>
      <option>Ceará (CE)</option>
      <option>Distrito Federal (DF)</option>
      <option>Espírito Santo (ES)</option>
      <option>Goiás (GO)</option>
      <option>Maranhão (MA)</option>
      <option>Mato Grosso (MT)</option>
      <option>Mato Grosso do Sul (MS)</option>
      <option>Minas Gerais (MG)</option>
      <option>Pará (PA)</option>
      <option>Paraíba (PB)</option>
      <option>Paraná (PR)</option>
      <option>Pernambuco (PE)</option>
      <option>Piauí (PI)</option>
      <option>Rio de Janeiro (RJ)</option>
      <option>Rio Grande do Norte (RN)</option>
      <option>Rio Grande do Sul (RS)</option>
      <option>Rondônia (RO)</option>
      <option>Roraima (RR)</option>
      <option>Santa Catarina (SC)</option>
      <option>São Paulo (SP)</option>
      <option>Sergipe (SE)</option>
      <option>Tocantins (TO)</option>
    </select>
    <label htmlFor="validationCustom04" className="form-label">Estado</label>
    <div className="invalid-feedback">
    Selecione um estado válido.
    </div>
  </div>
  <div className="form-floating col-md-3">
    <input type="text" className="form-control mb-3 focus-input" id="validationCustom05" required/>
    <label htmlFor="validationCustom05" className="form-label">CEP</label>
    <div className="invalid-feedback">
    Forneça um CEP válido.
    </div>
  </div>
  <div className="form-floating col-md-4">
    <input type="text" className="form-control mb-3 focus-input" id="validationCustom05" required/>
    <label htmlFor="validationCustom05" className="form-label">Senha atual</label>
    <div className="invalid-feedback">
    Insira sua senha atual corretamente.
    </div>
  </div>
  <div className="form-floating col-md-4">
    <input type="text" className="form-control mb-3 focus-input" id="validationCustom05" required/>
    <label htmlFor="validationCustom05" className="form-label">Nova senha</label>
    <div className="invalid-feedback">
    a senha deve conter caracteres alfanuméricos e caracteres especiais.
    Ex.: Example123@
    </div>
  </div>
  <div className="form-floating col-md-4">
    <input type="text" className="form-control mb-3 focus-input" id="validationCustom05" required/>
    <label htmlFor="validationCustom05" className="form-label">Confirmar senha</label>
    <div className="invalid-feedback">
    Senha diferente
    </div>
  </div>




  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input focus-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
      Concorde com os termos e condições
      </label>
      <div className="invalid-feedback">
      Você deve concordar antes de Salvar
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Salvar</button>
  </div>
    </form>
    </div>
  );
};

export default Conta;
