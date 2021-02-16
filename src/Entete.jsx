import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge'
import SommairePanier from './SommairePanier';
import { useState } from 'react';

function Entete(props){

    const [etatCacherSP, setCacheSommaire] = useState(true);
    
    const basculerSommairePanier = ()=>setCacheSommaire(etatCacherSP ? false:true);

    const [panier,setPanier] = props.etatPanier;
    console.log(panier)
    let nbArticles = Object.values(panier).reduce((accumulateur, eltcourant)=> accumulateur + eltcourant.qte,0);


        return(
        <header className="Entete">
            <div>Logo</div>
            <ul className="navPrincipale"> 
                <li>Produits</li>
                <li>A propos de nous</li>
                <li>Contactez-Nous</li>
            </ul>
            <ul className="navUtil">
                <li>
                    <Badge onClick={basculerSommairePanier} badgeContent={nbArticles} color="primary">
                    <ShoppingCartIcon/>
                    </Badge>
                    <SommairePanier cacher={etatCacherSP} etatPanier = {props.etatPanier}/>
                </li>
                <li>Mon Compte</li>
            </ul>
        </header>
    );
}

export default Entete
