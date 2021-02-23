import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge'
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Entete(props){

    const [etatCacherSP, setCacheSommaire] = useState(true);
    
    const basculerSommairePanier = ()=> setCacheSommaire(!etatCacherSP);

    const [panier,setPanier] = props.etatPanier;
    console.log(panier)
    let nbArticles = Object.values(panier).reduce((accumulateur, eltcourant)=> accumulateur + eltcourant.qte,0);


        return(
        <header className="Entete">
            <div><Link to="/">Logo</Link></div>
            <ul className="navPrincipale"> 
                <li><Link to="/nos-produits">Produits</Link></li>
                <li><Link to="/a-propos-de-magasin">A propos de nous</Link></li>
                <li><Link to="/contact">Contactez-Nous</Link></li>
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
