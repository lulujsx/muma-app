import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonsContainer: {
        paddingTop: 20,
		paddingBottom: 30,
		gap: 10
	},
	bttnCategory: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 32,
		paddingVertical: 6,
		paddingHorizontal: 12,
		backgroundColor: "white",
		height: 35,
		shadowColor: "#172031",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 20,
		elevation: 3, // Para Android, reemplaza la sombra
	},
	icon: {
		height: 18,
		width: 18,
		marginRight: 10,
	},
	text: {
		color: "#000",
	},
	active: {
		backgroundColor: "#F8AD34",
	},
	activeText: {
		color: "#fff",
	},

});