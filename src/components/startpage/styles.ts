import { StyleSheet, Dimensions } from "react-native";

export const StartpageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '10%',
    backgroundColor: '#ffffff'
  },
  header: {
    marginTop: '30%',
    alignItems: 'center',
    marginBottom: '15%'
  },
  headerImage: {
    height: 56,
    width: 56
  },
  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: '7%',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
	    width: 0,
	    height: 25,
    },
    shadowRadius: 20,
    elevation: 15,
  },
  footerIcon: {
    fontSize: 24,
    paddingVertical: 5
  },
  footerIconCenter: {
    fontSize: 24,
    borderRadius: 100,
    padding: 7,
    color: '#007AFF',
    backgroundColor: 'rgba(0, 122, 255, 0.25)'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: '10%'
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '220%'
  },
  newsHeaderText: {
    fontFamily: '-apple-system, "Inter", sans-serif',
    fontWeight: 'bold',
    fontSize: 16
  },
  newsHeaderHide: {
    padding: 2
  },
  newsHeaderHideText: {
    fontFamily: '-apple-system, "Inter", sans-serif',
    fontSize: 16,
    color: '#007AFF'
  }
})