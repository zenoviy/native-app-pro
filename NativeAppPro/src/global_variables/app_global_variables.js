import { Platform } from 'react-native';

const GLOBAL_VARIABLES = {
    HOST: Platform.OS === 'ios' || Platform.OS === 'android'? 'http://10.0.3.2' : 'http://192.168.1.1', // 'http://localhost',
    PORT: 3100,
    ALL_NEWS: '/all-news',
    SINGE_NEWS: '',
    SIGN_UP: '',
}

export default GLOBAL_VARIABLES