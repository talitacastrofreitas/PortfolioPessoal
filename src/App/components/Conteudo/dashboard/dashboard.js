import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container-fluid container-dash p-5">
      <div className="row justify-content-center">
        <div className="card-dash col-lg-3 col-sm-6 ms-5 mb-3">
          <div className="d-flex justify-content-between">
            <div>
              <i className="fa-solid fa-code ms-2 mt-3 icons-dash"></i>
            </div>
            <div className="ms-2">
              <div>
                <span className="title-dash ms-3">Projetos</span>
              </div>
              <div>
                <span className="subtitle-dash ms-3 text-end">150</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-dash col-lg-3 col-sm-6 ms-5 mb-3">
          <div className="d-flex justify-content-between">
            <div>
            <i className="fa-solid fa-briefcase ms-2 mt-3 icons-dash"></i>
            </div>
            <div className="ms-2">
              <div>
                <span className="title-dash ms-3">Trabalhos</span>
              </div>
              <div>
                <span className="subtitle-dash ms-3 text-end">150</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-dash col-lg-3 col-sm-6 ms-5 mb-3">
          <div className="d-flex justify-content-between">
            <div>
            <i className="fa-solid fa-pen-nib ms-2 mt-4 icons-dash"></i>
            </div>
            <div className="ms-2">
              <div>
                <span className="title-dash ms-3">Skills</span>
              </div>
              <div>
                <span className="subtitle-dash ms-3 text-end">150</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
export default Dashboard;
