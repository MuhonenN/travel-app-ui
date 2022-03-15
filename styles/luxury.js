import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    title: {
        marginTop: 24, //
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    textView: {
        postion: 'absolute',
        left: width / 10,
        bottom: height / 40,
    },
    description: {
        color: 'white',
        marginVertical: 10,
    },
    cardView: {
        height: height,
        width: width,
    },
});
