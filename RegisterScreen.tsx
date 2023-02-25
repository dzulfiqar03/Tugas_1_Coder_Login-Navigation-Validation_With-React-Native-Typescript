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

const RegisterScreen = ({navigation}) => {
  const backgroundStyle = {
    backgroundColor: 'red',
    paddingTop: 20,
    paddingBottom: 20,
  };
  const body = {
    backgroundColor: 'red',
    padding: 40,
  };

  state = {
    userEmail: '',
    userPassword: '',
  };

  var [messageFullNameRegister, setMessageFullNameRegister] = useState('');
  var [messageEmailRegister, setMessageEmailRegister] = useState('');
  var [messagePasswordRegister, setMessagePasswordRegister] = useState('');
  var [messageConfirmPasswordRegister, setMessageConfirmPasswordRegister] =
    useState('');

  RegisterView = () => {
    if (
      messageFullNameRegister.length === 0 &&
      messageEmailRegister.length === 0 &&
      messagePasswordRegister.length === 0 &&
      messageConfirmPasswordRegister.length === 0
    ) {
      alert(
        'Register Failed\n' +
          'Full Name : Must Be Required' +
          '\n' +
          'Email : Must Be Required' +
          '\n' +
          'Password : Must Be Required' +
          '\n' +
          'Confirm Password : Must Be Required',
      );
    } else if (
      messageFullNameRegister.length === 0 &&
      messageEmailRegister.length !== 0 &&
      messagePasswordRegister.length !== 0 &&
      messageConfirmPasswordRegister.length !== 0
    ) {
      alert('Full Name Must Be Required');
    } else if (
      messageFullNameRegister.length !== 0 &&
      messageEmailRegister.length === 0 &&
      messagePasswordRegister.length !== 0 &&
      messageConfirmPasswordRegister.length !== 0
    ) {
      alert('Email Must Be Required');
    } else if (
      messageFullNameRegister.length !== 0 &&
      messageEmailRegister.length !== 0 &&
      messagePasswordRegister.length === 0 &&
      messageConfirmPasswordRegister.length !== 0
    ) {
      alert('Password Must Be Required');
    } else if (
      messageFullNameRegister.length !== 0 &&
      messageEmailRegister.length !== 0 &&
      messagePasswordRegister.length !== 0 &&
      messageConfirmPasswordRegister.length === 0
    ) {
      alert('Confirm Password Must Be Required');
    } else if (
      messageFullNameRegister.length !== 0 &&
      messageEmailRegister.length !== 0 &&
      messagePasswordRegister.length !== 8 &&
      messageConfirmPasswordRegister.length !== 8
    ) {
      alert(
        'Register Failed\n' +
          'Full Name : ' +
          messageFullNameRegister +
          '\n' +
          'Email : ' +
          messageEmailRegister +
          '\n' +
          'Password : Must Be 8 Character' +
          '\n' +
          'Confirm Password : Must Be 8 Character',
      );
    } else if (messagePasswordRegister !== messageConfirmPasswordRegister) {
      alert(
        'Register Failed\n' +
          'Full Name : ' +
          messageFullNameRegister +
          '\n' +
          'Email : ' +
          messageEmailRegister +
          '\n' +
          'Password : ' +
          messagePasswordRegister +
          '\n' +
          'Confirm Password : Must Be same with Password',
      );
    } else {
      alert(
        'Register Success\n' +
          'Full Name : ' +
          messageFullNameRegister +
          '\n' +
          'Email : ' +
          messageEmailRegister +
          '\n' +
          'Password : ' +
          messagePasswordRegister +
          '\n' +
          'Confirm Password : ' +
          messageConfirmPasswordRegister,
      );
      navigation.push('Login');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.backgroundAll}>
        <View style={styles.header}>
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitle}>WELCOME</Text>
          </View>
        </View>
        <ScrollView style={body}>
          <View style={backgroundStyle}>
            <View>
              <Text style={styles.sectionSubTitle}>Full Name</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter Your Full Name Here"
                  editable
                  multiline
                  onChangeText={textFullNameReg =>
                    setMessageFullNameRegister(textFullNameReg)
                  }
                  numberOfLines={4}
                  style={styles.subInput}
                  backgroundColor="white"
                  value={messageFullNameRegister}
                  color="black"
                />
              </View>
              <Text style={styles.sectionSubTitle}>Email</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter Your Email Here"
                  editable
                  multiline
                  onChangeText={textEmailReg =>
                    setMessageEmailRegister(textEmailReg)
                  }
                  numberOfLines={4}
                  style={styles.subInput}
                  backgroundColor="white"
                  value={messageEmailRegister}
                  color="black"
                />
              </View>
              <Text style={styles.sectionSubTitle}>Password</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter Your Password Here"
                  editable
                  multiline
                  onChangeText={textPasswordReg =>
                    setMessagePasswordRegister(textPasswordReg)
                  }
                  numberOfLines={4}
                  style={styles.subInput}
                  backgroundColor="white"
                  value={messagePasswordRegister}
                  color="black"
                />
              </View>
              <Text style={styles.sectionSubTitle}>Confirm Password</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter Your Confirm Password Here"
                  editable
                  multiline
                  onChangeText={textConfirmPasswordReg =>
                    setMessageConfirmPasswordRegister(textConfirmPasswordReg)
                  }
                  numberOfLines={4}
                  style={styles.subInput}
                  backgroundColor="white"
                  value={messageConfirmPasswordRegister}
                  color="black"
                />
              </View>
            </View>
            <Button
              title="Register"
              onPress={this.RegisterView}
              style={styles.buttonReg}
              backgroundColor="white"
              color="black"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundAll: {
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: 'white',
    width: 384,
    height: 120,
    borderBottomRightRadius: 100,
  },
  sectionTitle: {
    marginTop: 20,
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
  buttonReg: {
    borderRadius: 50,
  },
});

export default RegisterScreen;
