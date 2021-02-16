import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss'

export default function Produit(props) {
    /**
     * Ajoute l'article au panier
     */
    
    function ajouterArticle() {
        const [panier, setPanier] = props.etatPanier;
        if(panier[props.id]){
            panier[props.id].qte++;
        }
        else{
            panier[props.id] = {prix: props.prix, qte : 1}
        }
        //Maintenant il faut changer l'état du panier
        const nouveauPanier = Object.assign({}, panier);
        setPanier(nouveauPanier);
        console.log(panier);
    }

    return(
       <li className="Produit">
           <div className="image">
               <img src={'images_produits/' + props.id + '.webp'} alt={props.nom}/>
           </div>   
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="Red">{props.prix} CA</p>
                <BtnAjoutPanier onClick={ajouterArticle}/>
            </div>
          
       </li>
    );

}