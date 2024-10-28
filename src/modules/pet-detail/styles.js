import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 30,
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#e0e0e0',
      paddingBottom: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 50,
      height: 50,
      marginRight: 8,
    },
    adoptionBtn: { 
        backgroundColor: '#892be228', 
        color: '#892be2c7',            
        borderWidth: 1,                
        borderColor: '#892be2a6',      
        borderRadius: 40,             
        width: 120,                   
        height: 40,                    
        alignItems: 'center',          
        justifyContent: 'center',      
        padding: 1, 
    },
    adoptionText: {
      color: '#892be2a9',
      fontWeight: '300',

    },
    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 30,
      marginTop: 10,
    },
    box: {
      borderWidth: 1,
      borderColor: '#ada8a8',
      borderRadius: 10,
      padding: 4,
      height: 80,
      width: 75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxValue: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    boxLabel: {
      fontSize: 12,
      color: '#7f8c8d',
    },
    protectoraCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderTopColor: '#e0e0e0',
    },
    protectoraCardItems: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    protectoraLabel: {
      fontSize: 12,
      color: '#7f8c8d',
    },
    protectoraName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    dataBtn: {
      padding: 10,
    },
    description: {
      fontSize: 14,
      color: '#34495e',
      marginVertical: 10,
      paddingBottom: 10,
    },
    adoptBtn: {
        alignItems: 'center',
        justifyContent: 'center',        
        width: 328,
        height: 50,
        borderRadius: 8,
        padding: 6,
        backgroundColor: '#F08318',
      },
      solAdoptionText:{
        color: '#fff', 
        fontSize: 15,
        fontWeight: '300' 
      },
      mapIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
      }
  });

export default styles;