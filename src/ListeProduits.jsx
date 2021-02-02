import './ListeProduits.css'
import Produit from './Produit'
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
    return(
        <div>
            <div className="ListeProduits">
                <h2>Produits disponible</h2>
                <ul>
                    {
                       tabProduits.map((prd) =>
                       
                        <Produit id={prd.id} nom={prd.nom} prix={prd.prix}/>
                       )
                    }
                 
                </ul>

            </div>


        </div>

    );

}