import { string } from '@jest/types/node_modules/@types/yargs'
import { stringMd5 } from 'react-native-quick-md5'


const randomString = (length) => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

const sms_api_params = {
    ac: 'send',
    uid: 'chan',
    pwd: stringMd5('chanVTE@mhk3fcy5rfh6kqj'),
    mobile: '',
    content: ''
};

export const sendSMS = async(phonenumber) => {
    
    await fetch()    
}