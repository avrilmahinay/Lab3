import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; 

const Recover = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Box around the fingerprint icon */}
      <View style={styles.iconBox}>
        <FontAwesome6 name="fingerprint" size={24} color="black" style={styles.icon} />
      </View>

      <Text style={styles.title}>Forgot Password?</Text>

      <Text style={{ fontSize: 15, textAlign:'center', marginTop: 5, marginBottom: 20, color: 'grey', right: 15 }}>
        No worries, we'll send your reset instructions.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ResetPage')}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <View style={styles.backContainer}>
        <AntDesign name="arrowleft" size={18} color="black" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText}>Back to log in</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  iconBox: {
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginBottom: 20,
    right: 120,
  },
  icon: { 
    alignSelf: "center", 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
    right: 50,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#5959c6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20, 
  },
  backText: {
    marginLeft: 5, 
    color: 'black', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Recover;
