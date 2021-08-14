import MMKVStorage from 'react-native-mmkv-storage';
// import { stringMd5 } from 'react-native-quick-md5'

const baseUrl = 'http://10.0.0.17:3000'


const MMKV = new MMKVStorage.Loader()
    .withInstanceID('store')
    .initialize()

const randomString = (length) => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

// const sms_api_params = {
//     ac: 'send',
//     uid: 'chan',
//     pwd: stringMd5('chanVTE@mhk3fcy5rfh6kqj'),
//     mobile: '',
//     content: ''
// };

// export const sendSMS = async(phonenumber) => {
//     await fetch()    
// }

/// every obj has a updateTime attribute, all resources are updated per day at Chinese time 4'o clock
/// so once the obj updateTime is behind 4'o clock it'll be udpated and quest server
/// another situation is that the local app don't have this resource so must quest server then set local variable
export const ResourceFetch = async(uri) => {
    try {
        obj = MMKV.getMap(uri);

        // quest server
        if (obj === undefined || obj === null) {
            try {
                let questedObj = await fetchNstore(uri);
                return questedObj;
            } catch(e) {
                throw e;
            } 
        } else {
            let day, hour;
            // using local date
            // so must set a checker on server for insecure request
            // the aim of app is sell things in CN, so it's ok to do this cuz the unified time CN use
            let currentDate = new Date();
            day = obj.getDate();
            hour = obj.getHours();

            if(currentDate.getHours() >= hour && currentDate.getDate() >= day ) {
                try {
                    let questedObj = await fetchNstore(uri);
                    return questedObj;
                } catch(e) {
                    throw e;
                } 
            }
            return obj;
        }

    } catch(e) {
        throw e;
    }

}

const fetchNstore = async(uri) => {
    let resp = await fetch(baseUrl + uri);
    let respJson = await resp.json();
    MMKV.setMap(uri, respJson);
    return respJson;
}