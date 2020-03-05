import React from 'react';
import '../stylescss/search.css';
import details from '../components/details';
import { Link } from 'react-router-dom';
import Details from '../components/details';



class Annonces extends React.Component{

    state = {
        appartements: []

    }
    componentDidMount() {
        fetch('/api/appartements').then(res => {
            return res.json();
        }).then(res => {
            console.log(res)
            this.setState({appartements :res})
        })
    }



    render(){
        return (<div className="annonces">

            {this.state.appartements && this.state.appartements.map((v, i) => {
                return (
                    <div className="annoce-card">

                            <h2>Annonce </h2>
                           <img src={v.image} alt="une images" />
                      <p>Type : {v.type}</p>
                      <p>Superficie : {v.superficie} m²</p>
                      <p>Addresse : {v.adresse}</p>
                      <Link to="Details">Détails</Link>

                    </div>

                )
            })}
        </div>)
    }
}
export default Annonces;
