import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Styles from "./Styles";

export default function App() {
  const [value, setValue] = useState([]);

  function getRandomNumber() {
    setValue(Array.from({ length: 10000 }, () => Math.floor(Math.random() * 21) + " "))
  };

  let counts = value.reduce((previous, current) => {
    previous[current] = (previous[current] || 0) + 1;
    return previous;
  }, {});

  let maxCount = Math.max(...Object.values(counts));
  let maxFrequent = Object.keys(counts).filter(value => counts[value] === maxCount);
  let minCount = Math.min(...Object.values(counts));
  let minFrequent = Object.keys(counts).filter(value => counts[value] === minCount);

  return (
    <View style={Styles.app}>
      <StatusBar backgroundColor="#148989" />
      <Text style={Styles.title}>Algoritmos</Text>
      <Text style={Styles.caption}>Clicando abaixo o aplicativo irá sortear 10.000 vezes os
        números de 0 a 20, e irá informar qual número foi sorteado mais vezes e quantas vezes
        isso ocorreu e fará o mesmo para o número menos sorteado.</Text>
      <TouchableOpacity style={Styles.button} onPress={getRandomNumber}>
        <Text style={Styles.textButton}>Clique aqui</Text>
      </TouchableOpacity>
      {maxFrequent == "" ? <Text></Text> : maxFrequent.length === 1 ?
        <Text style={Styles.texts}>
          O número mais digitado foi o número: {maxFrequent}</Text> :
        <Text style={Styles.texts}>
          Os números mais digitados foram os números: {maxFrequent}</Text>}
      {maxCount == -Infinity ? <Text></Text> :
        <Text style={Styles.texts}>No total de {maxCount} vezes</Text>}
      {minFrequent == "" ? <Text></Text> : minFrequent.length === 1 ?
        <Text style={Styles.textSpacing}>
          O número menos digitado foi o número: {minFrequent}</Text> :
        <Text style={Styles.textSpacing}>
          Os números menos digitados foram os números: {minFrequent}</Text>}
      {minCount == Infinity ? <Text></Text> :
        <Text style={Styles.texts}>No total de {minCount} vezes</Text>}
    </View>
  );
};
