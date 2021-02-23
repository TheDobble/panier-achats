import BtnAjoutPanier from './BtnAjoutPanier';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Produit.scss'

export default function Produit({etatPanier,id, prix, nom}) {
    /**
     * Ajoute l'article au panier
     */

    const [panier, setPanier] = etatPanier;


    function ajouterArticle() {
  
        if(panier[id]){
            //setPanier();
            panier[id].qte++;
        }
        else{
            //setPanier();
            panier[id] = {prix: prix, qte : 1}
        }
        //Maintenant il faut changer l'état du panier
        setPanier(JSON.parse(JSON.stringify(panier)));
        //setPanier(nouveauPanier);
        //console.log(panier);
    }

    let btnTexte = "Ajouter au panier";
    let btnQte = 0;
    let btnCouleurCls = "";
    if(panier[id]){
        btnTexte = <AddCircleOutlineIcon/>; // JSX ; Javascript Syntax extension
        btnQte = panier[id].qte;
        btnCouleurCls = "rouge";
    }
    return(
       <li className="Produit">
           <div className="image">
               <img src={'images_produits/' + id + '.webp'} alt={nom}/>
           </div>   
            <div className="info">
                <h3>{nom}</h3>
                <p className="Red">{prix} CA</p>
                <BtnAjoutPanier onClick={ajouterArticle} texte={btnTexte} qte={btnQte} btnClasse={btnCouleurCls} />
            </div>
          
       </li>
    );

}