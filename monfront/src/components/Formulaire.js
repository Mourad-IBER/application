import React, { useEffect, useState } from "react";

function Formulaire() {
  const [entreprises, setEntreprises] = useState();

  useEffect(() => {
    async function getEntreprises() {
      const res = await fetch("http://localhost:8080/api/entreprises");
      const json = await res.json();
      setEntreprises(json);
    }
    getEntreprises();
  }, []);

  return (
    <>
      <ul>
        {entreprises
          ? entreprises.map(entreprise => {
              return (
                <li key={entreprise.id}>
                  <b>Raison Sociale :&nbsp; </b>
                  {entreprise.raisonsocial} <br />
                  <b>Forme juridique :&nbsp; </b>
                  {entreprise.formejuridique} <br />
                  <b>Adresse :&nbsp; </b>
                  {entreprise.adresse}<br />
                  <b>Téléphone :&nbsp; </b>
                  {entreprise.telephone}<br />
                  <b>Email :&nbsp; </b>
                  {entreprise.email}<br />
                  <b>Site Web :&nbsp; </b>
                  {entreprise.siteweb}<br /><br />
                </li>
              );
            })
          : "chargement"}
      </ul>
    </>
  );
}
export default Formulaire;
