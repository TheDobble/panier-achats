import './BtnAjoutPanier.scss';
import Badge from '@material-ui/core/Badge';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';
export default function BtnAjoutPanier({qte,onClick,texte,btnClasse}){
    
    return(
        <Badge  badgeContent={qte} color="secondary">
        <button className= {`BtnAjoutPanier ${btnClasse}`}
                onClick ={(event) =>{onClick()}}>{texte}</button>
        </Badge>
    )
}
