import './ListeProduits.scss'
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
                       
                        <Produit 
                                key={prd.id}
                                id={prd.id} 
                                nom={prd.nom} 
                                prix={prd.prix} 
                                etatPanier={props.etatPanier}/>
                       )
                    }
                 
                </ul>

            </div>


        </div>

    );

}