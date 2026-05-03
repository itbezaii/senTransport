import "./ListeLignes.css";
import LigneBus from "./LigneBus";

function ListeLignes({ lignes }) {
  return (
    <div className="liste-lignes">
      <h2 className="liste-titre">Lignes disponibles</h2>
      <p className="liste-description">
        Sélectionnez une ligne pour voir les détails
      </p>
      {lignes.map((ligne) => (
        <LigneBus
          key={ligne.id}
          numero={ligne.numero}
          depart={ligne.depart}
          arrivee={ligne.arrivee}
          arrets={ligne.arrets}
        />
      ))}
    </div>
  );
}

export default ListeLignes;
