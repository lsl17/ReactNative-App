import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { deepskyblue, royalblue } from './Constants';


const Home = (props) => {
    return (
      <Background>
        <View style={styles.container}>
          <Text style={styles.heading}>Let's start</Text>
          <Text style={[styles.heading, styles.subHeading]}>Coding</Text>
          <Btn bgColor={green} textColor='white' btnLabel="Login" onPress={() => props.navigation.navigate("Login")} />
          <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" onPress={() => props.navigation.navigate("Signup")} />
        </View>
      </Background>
    );
  }

const styles = StyleSheet.create({});

export default Home;