import './Produit.css'


export default function Produit(props) {
    return(
       <li className="Produit">
           <div className="image">
               <img src={'images_produits/' + props.id + '.webp'} alt={props.nom}/>
               <div className="info">
                    <h3>{props.nom}</h3>
                    <p ckassName="Red">{props.prix} CA</p>
                    <button>Ajouter au panier</button>
               </div>
           </div>
       </li>
    );

}