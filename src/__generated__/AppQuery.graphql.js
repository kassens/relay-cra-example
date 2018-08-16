/**
 * @flow
 * @relayHash d4471a0ea9001ed64d0192f324507b70
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Pokemon_pokemon$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +pokemons: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Pokemon_pokemon$ref,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  pokemons(first: 10) {
    id
    ...Pokemon_pokemon
  }
}

fragment Pokemon_pokemon on Pokemon {
  number
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  pokemons(first: 10) {\n    id\n    ...Pokemon_pokemon\n  }\n}\n\nfragment Pokemon_pokemon on Pokemon {\n  number\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemons",
        "storageKey": "pokemons(first:10)",
        "args": v0,
        "concreteType": "Pokemon",
        "plural": true,
        "selections": [
          v1,
          {
            "kind": "FragmentSpread",
            "name": "Pokemon_pokemon",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemons",
        "storageKey": "pokemons(first:10)",
        "args": v0,
        "concreteType": "Pokemon",
        "plural": true,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "number",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3dc3bc0fc38c9408f42f9917f98e62ad';
module.exports = node;
