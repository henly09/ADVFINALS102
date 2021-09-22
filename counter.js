import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class awts extends React.Component {

state = {

    counterbagel : 0,
    counterpretzel : 0,
    counterbreadstick: 0,
    countercroissant: 0,
    counterwhitebread: 0,
    counterwheatbread: 0,
    counterwholegrainbread: 0,
    counterryebread: 0,
    counteramericanocoffee: 0,
    counterblackcoffee: 0,
    countercappuccino: 0,
    counterflatwhite: 0,
    countergalao: 0,
    counterlatte: 0,
    counterlungo: 0,
    countermocha: 0,
    counterangelcake: 0,
    counterbarabirth: 0,
    counterbaumkuchen: 0,
    counterblackoutcake: 0,
    counterblondie: 0,
    counterbrownie: 0,
    counterchocolatecake: 0,
    counterdundeecake: 0

}

incrementValuebagel = () => {
  this.setState({
    counterbagel: this.state.counterbagel + 1,
  })
  console.log("Value: " + (this.state.counterbagel + 1))
}

decrementValuebagel = () => {
  this.setState({
    counterbagel: this.state.counterbagel - 1,
  })
  console.log("Value: " + (this.state.counterbagel - 1))
}

 
}





