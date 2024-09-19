import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, 
         StyleSheet, Image, SafeAreaView, Dimensions, Switch
        } from 'react-native';

const PasswordGenerator = () => {
   const [randomCode, setRandomCode] = useState('');
   const [inputPassLength, setInputPassLength] = useState(''); 


   const generateRandomCode = () =>{
      // const randomCode = Math.floor(100000 + Math.random() * 900000).toString(); 
      // setRandomCode(randomCode); 
      const randomCode = Math.random().toString(36).slice(-8); //Tao chuoi ngau nhien 8 ki tu
      setRandomCode(randomCode); //Dien chuoi ngau nhien vao o password
      setInputPassLength(randomCode.length.toString()); //Dem so ki tu 
      
   }

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [switchStates, setSwitchStates] = useState({
      lowerCase: false,
      upperCase: false,
      numbers: false,
      specialSymbols: false,
      });

     const toggleSwitch = (key) => {
      setSwitchStates(prevStates => ({
      ...prevStates,
      [key]: !prevStates[key]
        }));
      };

 

  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>PASSWORD</Text>
            <Text style={styles.textTitle}>GENERATOR</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            value={randomCode}
            onChangeText={setRandomCode}
            
            //value={randomCode}
            editable={false}
            ></TextInput>
          </View>

          <View style={styles.passLengthContainer}>
            <Text style={styles.textLeft}>Password Length</Text>
            <TextInput 
            style={styles.inputPassLength}
            value={inputPassLength}
            editable={false}
            ></TextInput>
          </View>

          <View style={styles.passLengthContainer}>
            <Text style={styles.textLeft}>Include lower case letter</Text>
             <Switch style={styles.switchContainer}
                 trackColor={{ false: "#767577", true: "#836FFF" }}
                 thumbColor={switchStates.lowerCase ? "#f5dd4b" : "#6959CD"}
                 onValueChange={() => toggleSwitch('lowerCase')}
                 value={switchStates.lowerCase}
              />
          </View>

           <View style={styles.passLengthContainer}>
            <Text style={styles.textLeft}>Include upcase case letter</Text>
             <Switch style={styles.switchContainer}
                trackColor={{ false: "#767577", true: "#836FFF" }}
                thumbColor={switchStates.upperCase ? "#f5dd4b" : "#6959CD"}
                onValueChange={() => toggleSwitch('upperCase')}
                value={switchStates.upperCase}
              />
          </View>

           <View style={styles.passLengthContainer}>
            <Text style={styles.textLeft}>Include number</Text>
            <Switch style={styles.switchContainer}
              trackColor={{ false: "#767577", true: "#836FFF" }}
              thumbColor={switchStates.numbers ? "#f5dd4b" : "#6959CD"}
              onValueChange={() => toggleSwitch('numbers')}
              value={switchStates.numbers}
             />
          </View>

           <View style={styles.passLengthContainer}>
            <Text style={styles.textLeft}>Include special symbol</Text>
            <Switch style={styles.switchContainer}
              trackColor={{ false: "#767577", true: "#836FFF" }}
              thumbColor={switchStates.specialSymbols ? "#f5dd4b" : "#6959CD"}
              onValueChange={() => toggleSwitch('specialSymbols')}
              value={switchStates.specialSymbols}
          />
          </View>

         <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={generateRandomCode}>
               <Text style={styles.textButton}>GENERATOR PASSWORD</Text>
            </TouchableOpacity>
          </View>


         
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 40,
    backgroundColor: "#7979b2"
  },
  container_1:{
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#23235b',
    borderRadius: 20,
    justifyContent: 'flex-start',
  },
  containerTitle:{
    marginTop: 30,//Tieu de cach vien
    alignItems: 'center',
    marginBottom: 50
    
  },
  textTitle:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    paddingHorizontal: 10,
    width: '80',
    marginBottom: 30

  }, 
  input:{
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonContainer:{
    alignItems: 'center'

  },
  button:{
    backgroundColor: "#6A5ACD",
    width: '80%',
    paddingVertical: 15,

  },
  textButton:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  passLengthContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',//Bat dau tu ben trai
    alignItems: 'center',
    marginBottom: 40,//Khoang cach duoi 
    paddingHorizontal: 10,
  },
  textLeft:{
    color: "white",
    fontSize: 16,
    marginRight: 10, //Khoang cach giua text va input
    fontWeight: 'bold',
  },
  inputPassLength:{
    backgroundColor: "white",
    width: 120,//Do rong
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  }, 
  switchContainer:{
    marginLeft: 'auto'
  }
  
});

export default PasswordGenerator;
