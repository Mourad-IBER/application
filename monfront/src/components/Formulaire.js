import React, { useEffect } from "react";
import { Input, Button } from "antd";

const inputStyle = {
  minWidth: "240px",
  width: "calc(1/3*100%",
  maxWidth: "320px"
};

const Entreprise = () => (
  <div className="entreprise">
    <Input addonBefore="Raison Social : " style={inputStyle} />
    <Input addonBefore="Forme juridique : " style={inputStyle} />
    <Input addonBefore="Adresse : " style={inputStyle} />
    <Input addonBefore="Ville : " style={inputStyle} />
    <Input addonBefore="Code postale : " style={inputStyle} />
    <Input addonBefore="Téléphone" style={inputStyle} />
    <Input addonBefore="Email" style={inputStyle} />
    <Input addonBefore="Site web" style={inputStyle} />
  </div>
);

function Formulaire() {
  // useState entreprises []
  useEffect(() => {
    fetch("http://localhost:8080/api/entreprises")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        //setEntreprises(res)
      });
  }, []);

  return (
    <>
  
    <form>
      <Entreprise />
      <Entreprise />
      <Button type="primary" htmlType="submit" style={inputStyle}>
        Envoyer le Formulaire
      </Button>
    </form>
    </>
  );
}
export default Formulaire;
