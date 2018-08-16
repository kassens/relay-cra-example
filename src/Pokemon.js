import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

class Pokemon extends Component {
  render() {
    return (
      <div>
        #{this.props.pokemon.number} {this.props.pokemon.name}
      </div>
    );
  }
}

export default createFragmentContainer(Pokemon, {
  pokemon: graphql`
    fragment Pokemon_pokemon on Pokemon {
      number
      name
    }
  `
});
