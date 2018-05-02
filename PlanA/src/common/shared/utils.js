import { Dimensions } from 'react-native';

const { width, height }  = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;

export const generateUniqueId = () => {
    const currentMilliseconds = Date.now();
    const random = Math.floor(Math.random() * 100);
    return currentMilliseconds + '' + random;
};

export const convertMapToArray = (map) => Object.keys(map).map(key => map[key]);
