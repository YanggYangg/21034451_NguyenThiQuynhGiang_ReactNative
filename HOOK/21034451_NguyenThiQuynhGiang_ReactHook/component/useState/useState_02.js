import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1


const CounterApp02 = () => {
        const [diceRolls, setDiceRolls] = useState([]);//sd useState tao mang rong
        
        console.log('Dice rolls:', diceRolls);

        return (
          <View>
            <Button
              title="Roll dice!"
              onPress={() => {
                setDiceRolls([...diceRolls, randomDiceRoll()])
              }}
            />
            {diceRolls.map((diceRoll, index) => (
              <Text style={{ fontSize: 24 }} key={index}>
                {diceRoll}
              </Text>
            ))}
          </View>
    );
};

export default CounterApp02;
