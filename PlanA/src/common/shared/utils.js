import { Dimensions } from 'react-native';

const { width, height }  = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;

export const generateUniqueId = () => {
    const currentMilliseconds = Date.now();
    const fourDigitRandom = Math.floor(Math.random() * 9000 + 1000);
    return currentMilliseconds + '' + fourDigitRandom;
};

export const convertMapToArray = (map) => Object.keys(map).map(key => map[key]);
