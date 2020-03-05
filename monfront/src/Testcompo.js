import React, { Component } from "react";

class Testcompo extends Component {
  render() {
    const namelist = this.props.namelist;
    const data = namelist.map(name => {
      return (
        <div className="testcompo" key={name.id}>
          <div>nom: {name.name}</div>
          <div>age: {name.age}</div>
          <div>sexe:{name.sexe}</div>
        </div>
      );
    });
    return <div className="name-list">{data}</div>;
  }
}

export default Testcompo;
