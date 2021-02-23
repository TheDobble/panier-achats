import Entete from './Entete'
import Footer from './Footer'
import ListeProduits from './ListeProduits'
import './Page.scss';
import useLocalStorageState from './hooks/useLocalStorageState';
import {Switch, Route} from 'react-router-dom';
import Accueil from "./Accueil";
import ContactezNous from "./ContactezNous";
import aPropos from "./Apropos";


export default function Page() {
 
  //On utilise notre hook perso pour créer un état qui sera sauvegardé dans localStorage
  // Cet état aura comme valeur init : {} et l'étiquette sera "panier"
  const etatPanier = useLocalStorageState({}, "panier");
 
 //Autre exemple d'utilisation
  /*const etatPanier = useState(() =>{
    
    const panierLS = window.localStorage.getItem('panier');
    return (panierLS !== null) ? JSON.parse(panierLS) : {};
  });
  const [panier,setPanier] = etatPanier;

  //Sauvergarder le panier dans localStorage
  //Cp,,e ce cpde est un effet secondaire de votre composant
  //(qui doit être exécuté à chaque mutation du panier) la bonne façon
  //le coder en respectant la manière React est d'utiliser un hook spécialisé
  useEffect(() => {
    window.localStorage.setItem('panier', JSON.stringify(panier))
  },[panier]); // tableau des dépendances*/


  return (
   <div className="Page">
        <Entete etatPanier = {etatPanier}/>
      <section className="contenuPrincipal">
        <Switch>
          <Route path="/" component={Accueil} exact/>
          <Route path="/nos-produits" exact>
            <ListeProduits etatPanier = {etatPanier}/>
          </Route>
          <Route path="/a-propos-de-magasin" component={aPropos} exact/>
          <Route path="/contact" component={ContactezNous} exact/>
        </Switch>
      </section>
        <Footer avecNom="Daniel Fiola"/>
   </div>

  );
}
