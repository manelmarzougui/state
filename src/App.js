import React, { Component } from "react";
import "./App.css";
export class App extends Component {
  state = {
    personne: {
      fullname: "Marzougui Manel",
      bio: "Queen",
      profission: "etudiente",
      imgs: "https://static.vecteezy.com/ti/vecteur-libre/p1/2002257-belle-femme-avatar-personnage-icone-gratuit-vectoriel.jpg",
    },
    shows: true,
  };
  details = () => {
    this.setState({
      ...this.state,
      shows: !this.state.shows,
    });
  };
  render() {
    return (
      <div className="card">
        {this.state.shows && (
          <>
            <div className="card">
              <img src={this.state.personne.imgs} alt="logo" />
              <h1>{this.state.personne.fullname}</h1>
              <h5>{this.state.personne.bio}</h5>
              <h3>{this.state.personne.profission}</h3>
            </div>
          </>
        )}
        <button onClick={this.details}> show details </button>
      </div>
    );
  }
}

export default App;
