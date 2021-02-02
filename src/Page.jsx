import Entete from './Entete'
import Footer from './Footer'
import './Page.css';


function Page() {
  return (
   <div className="Page">
        <Entete/>
      <section class="contenuPrincipal">
        Le contenu principal
      </section>
        <Footer/>
   </div>

  );
}

export default Page;
