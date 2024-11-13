import React from 'react';

function App() {
  return (
    <div className="container">
      {/* Encabezado */}
      <header className="my-5">
        <h1 className="text-center">Mi Página en React con Bootstrap</h1>
        <p className="lead text-center">Esta es una página simple usando React y Bootstrap.</p>
      </header>

      {/* Sección de Tarjetas */}
      <section className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Título de Tarjeta 1</h5>
              <p className="card-text">Descripción breve de la tarjeta.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Título de Tarjeta 2</h5>
              <p className="card-text">Otra breve descripción.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Título de Tarjeta 3</h5>
              <p className="card-text">Descripción de la última tarjeta.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="text-center mt-5">
        <p>© 2024 Mi Página con React y Bootstrap</p>
      </footer>
    </div>
  );
}

export default App;
