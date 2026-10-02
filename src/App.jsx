import Educacion from "./Educacion";
import Experiencia from "./Experiencia";
import Header from "./Header";
import SobreMi from "./SobreMi";


function App() {
  return (
    <div>
       <Header /> 
       <SobreMi />
       <section className="container my-">
        <div className="row">
          <div className="col-md-6">
            <Experiencia />
          </div>
          <div className="col-md-6">
            <Educacion />
          </div>
        </div>
       </section>
       
       
    </div>
  );
}

export default App
