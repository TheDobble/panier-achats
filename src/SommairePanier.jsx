import './SommairePanier.scss';

export default function SommairePanier({etatPanier:[panier, setPanier],cacher}){
    const infoPanier = retournerInfoPanier(panier);
    return(

        <div className= {'SommairePanier' + (cacher?' cacher':'')}>
            <span className="nbArticles">Articles Différents: {infoPanier.nbArticles}</span>
            <span className="qteArticles">Articles total: {infoPanier.qteArticles}</span>
            <span className="sousTotal">Sous-Total: {infoPanier.sousTotal} </span>
            <span className="tps">TPS: {infoPanier.tps}</span>
            <span className="tvq">TVQ: {infoPanier.tvq}</span>
            <span className="Total">Total: {infoPanier.total}</span>
        </div>

    );

}

function retournerInfoPanier(pan){
   let info = {}; //{nbArticles : 2, qteArticles : 18, sousTotal ; 1234}

   //Sortir les articles et les mettres dans un tableau
   let articles = Object.values(pan);
   console.log(articles);
   //nb d'articles diff
   info.nbArticles = articles.length;
   //Quantité d'articles total
    info.qteArticles = articles.reduce((valInit, valCourante)=>{
        return valCourante.qte + valInit;
    },0);

    //Sous-Total
    let sousTotal = articles.reduce((i, c)=>{
        return c.prix * c.qte + i;
    },0);
    info.sousTotal = sousTotal.toFixed(2);
    let tps = sousTotal*0.05;
    info.tps = tps.toFixed(2);
    let tvq = sousTotal*0.09975
    info.tvq = tvq.toFixed(2);
    info.total = (sousTotal + tps + tvq).toFixed(2);

    console.log(info.sousTotal);

    return info;
}