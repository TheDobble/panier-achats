import Entete from './Entete'
import Footer from './Footer'
import ListeProduits from './ListeProduits'
import './Page.css';


function Page() {
  return (
   <div className="Page">
        <Entete/>
      <section class="contenuPrincipal">
        <ListeProduits/>
      </section>
        <Footer avecNom="Daniel Fiola"/>
   </div>

  );
}

export default Page;
