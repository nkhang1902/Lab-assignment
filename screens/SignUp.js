import React from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import Users from '../assets/users';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignUp = ({navigation}) => 
{
    const [data, setData] = React.useState({
        name: '',
        pass: ''
    });

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );
    
        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
    
        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }
    
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style={styles.text_header}>Register !!!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textSign1}>Username</Text>
                <TextInput
                    placeholder= 'Username'
                    style={styles.textInput}
                    autoCapitalize = "none"
                    //onChangeText={(val) => textInputChange(val)}
                />
                <Text style={styles.textSign1}>Password</Text>
                <TextInput
                    placeholder= 'Password'
                    style={styles.textInput}
                    autoCapitalize = "none"
                    //onChangeText={(val1) => textInputChange(val1)}
                />
                <Text style={styles.textSign1}>Confirm password</Text>
                <TextInput
                    placeholder= 'Username'
                    style={styles.textInput}
                    autoCapitalize = "none"
                    //onChangeText={(val) => textInputChange(val)}
                />
                <Text style={styles.textSign1}>Email</Text>
                <TextInput
                    placeholder= 'Email'
                    style={styles.textInput}
                    autoCapitalize = "none"
                    //onChangeText={(val) => textInputChange(val)}
                />
                <View styles={styles.button} onPress={() => {loginHandle( val, val1)}}>
                    <LinearGradient
                        colors={['#C85D67', '#CB2635']}
                        style={styles.signIn}
                    >
                    <Text style={[styles.textSign,{color:'#fff'}]}>Sign Up</Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#CB2635'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    signIn: {
        width: 310,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        marginLeft: 20
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textSign1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    }
});