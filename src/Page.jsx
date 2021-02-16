import Entete from './Entete'
import Footer from './Footer'
import ListeProduits from './ListeProduits'
import './Page.scss';
import { useState } from 'react';

function Page() {

  //Exemple stockage panier
  /*const testPanier = ({
    prd00001:{prix : 10.99, qte : 1},
    prd00005:{prix : 24.95, qte:1}
  })  

  */

  const etatPanier = useState({});

  return (
   <div className="Page">
        <Entete etatPanier = {etatPanier}/>
      <section className="contenuPrincipal">
        <ListeProduits etatPanier = {etatPanier}/>
      </section>
        <Footer avecNom="Daniel Fiola"/>
   </div>

  );
}

export default Page;
