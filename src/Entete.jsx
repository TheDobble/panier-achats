import './Entete.css';

function Entete(props){
    return(
        <header>
            <div>Logo</div>

            <ul className="navPrincipale"> 
                <li>Produits</li>
                <li>A propos de nous</li>
            </ul>
            <ul class="navUtil">
                <li>Panier</li>
                <li>Mon Compte</li>
            </ul>
        </header>
    );
}

export default Entete
