import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
        backgroundColor: 'white',
        paddingBottom: 100
	},
    category: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 20,
        marginBottom: 20
    },
    categoryTitle: {
        fontWeight: "bold",
        fontSize: 20,
    },
    buttonAdd: {
        backgroundColor: '#f08418',
        width: 60,
        height: 60,  
		padding: 20,                 
		borderRadius: 50,             
		alignItems: 'center',         
		justifyContent: 'center',
        position: 'absolute', // Para que sea flotante
		bottom: 20,
		right: 26, 
		shadowColor: "#000", // Color de la sombra
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25, // Opacidad de la sombra
		shadowRadius: 3.5, // Difuminado de la sombra
		elevation: 5, // Para Android
    }
});
