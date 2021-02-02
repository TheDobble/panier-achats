import './Footer.css';

function Footer(props){
    const annee = (new Date()).getFullYear();
    return(
        <footer>
        &copy; {annee} -Footer {props.avecNom}
      </footer>
    );
}

export default Footer
