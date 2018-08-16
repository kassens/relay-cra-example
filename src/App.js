import React, { Component } from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import Pokemon from "./Pokemon";
import { QueryRenderer } from "react-relay";

import PokemonEnvironment from "./PokemonEnvironment.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <QueryRenderer
            environment={PokemonEnvironment}
            query={graphql`
              query AppQuery {
                pokemons(first: 10) {
                  id
                  ...Pokemon_pokemon
                }
              }
            `}
            render={({ props, error }) => {
              if (error) {
                return "error";
              }
              if (props) {
                return props.pokemons.map(pokemon => (
                  <div key={pokemon.id}>
                    <Pokemon pokemon={pokemon} />
                  </div>
                ));
              }
              return "loading";
            }}
          />
        </p>
      </div>
    );
  }
}

export default App;
