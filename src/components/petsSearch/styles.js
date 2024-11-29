import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
		paddingRight: 20,
		marginVertical: 20,
    },
    input: {
        flex: 1,
        padding: 14,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: '#f7f7f7',
		color: '#c9c9c9',
		borderColor: 'transparent',
    },
	
    button: {
        backgroundColor: '#0298a3',
        padding: 10,
        borderRadius: 10,
    }
});

export default styles;