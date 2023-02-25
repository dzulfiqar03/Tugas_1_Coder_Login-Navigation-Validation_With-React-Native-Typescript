import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import {messageEmailRegister, messagePasswordRegister} from './RegisterScreen';

function LoginScreen({navigation}) {
  const backgroundStyle = {
    backgroundColor: 'red',
    paddingTop: 20,
    paddingBottom: 20,
  };
  const body = {
    backgroundColor: 'red',
    padding: 40,
    marginBottom: 75,
  };

  state = {
    userName: '',
    userPassword: '',
  };

  var [messageEmailLogin, setMessageEmailLogin] = useState('');
  var [messagePasswordLogin, setMessagePasswordLogin] = useState('');

  LoginView = () => {
    if (messageEmailLogin.length === 0 && messagePasswordLogin.length === 0) {
      alert(
        'Login Failed\n' +
          'Email : Email Must Be Required' +
          '\n' +
          'Password : Password Must Be Required',
      );
    } else if (
      messageEmailLogin.length === 0 &&
      messagePasswordLogin.length !== 0
    ) {
      alert('Email Must Be Required');
    } else if (
      messageEmailLogin.length !== 0 &&
      messagePasswordLogin.length === 0
    ) {
      alert('Password Must Be Required');
    } else if (
      messageEmailLogin.length !== 0 &&
      messagePasswordLogin.length !== 8
    ) {
      alert(
        'Login Failed\n' +
          'Email : ' +
          messageEmailLogin +
          '\n' +
          'Password : Password Must Be 8 character',
      );
    } else {
      alert(
        'Login Success\n' +
          'Email : ' +
          messageEmailLogin +
          '\n' +
          'Password :' +
          messagePasswordLogin,
      );
    }

    if (
      messageEmailLogin === messageEmailRegister &&
      messagePasswordLogin === messagePasswordRegister
    ) {
      alert(
        'Login Success\n' +
          'Email : ' +
          messageEmailLogin +
          '\n' +
          'Password :' +
          messagePasswordLogin +
          'Click OK, To Next Page',
      );
    }
  };

  return (
    <SafeAreaView style={styles.backgroundAll}>
      <View style={styles.header}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitle}>WELCOME BACK</Text>
        </View>
      </View>
      <View style={backgroundStyle}>
        <ScrollView style={body}>
          <View>
            <View style={styles.sectionSubTitle}>
              <Text style={styles.sectionSubTitle}>Email</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Enter Your Email Here"
                editable
                multiline
                onChangeText={textEmail => setMessageEmailLogin(textEmail)}
                numberOfLines={4}
                style={styles.subInput}
                backgroundColor="white"
                value={messageEmailLogin}
                color="black"
              />
            </View>
            <View style={styles.sectionSubTitle}>
              <Text style={styles.sectionSubTitle}>Password</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Enter Your Password Here"
                editable
                multiline
                onChangeText={textPassword =>
                  setMessagePasswordLogin(textPassword)
                }
                numberOfLines={4}
                style={styles.subInput}
                backgroundColor="white"
                value={messagePasswordLogin}
                color="black"
              />
            </View>
          </View>
          <Button
            title="Login"
            onPress={this.LoginView}
            style={styles.buttonLgn}
            backgroundColor="white"
            color="black"
          />
          <Button
            title="Create Your Account"
            onPress={() => navigation.push('Register')}
            style={styles.buttonCrt}
            backgroundColor="white"
            color="red"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backgroundAll: {
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: 'white',
    width: 384,
    height: 200,
    borderBottomLeftRadius: 100,
  },
  sectionTitle: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  sectionSubTitle: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 20,
    paddingBottom: 5,
    color: 'black',
  },
  subInput: {
    fontSize: 20,
    height: 50,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
  },
  input: {
    height: 100,
    shadowColor: 'pink',
    shadowOffset: 20,
    fontSize: 200,
  },
  buttonLgn: {
    borderRadius: 50,
  },
});

export default LoginScreen;
