import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 32, 
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: "100%",
  },
  submitButton: {
    backgroundColor: "orange",
    borderRadius: 8,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
