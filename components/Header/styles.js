import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 99
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },

    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});

export default styles;