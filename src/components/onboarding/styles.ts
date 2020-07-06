import { StyleSheet } from "react-native";

export const OnboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: '#ffffff'
  },
  header: {
    marginTop: '10%',
    alignItems: 'center',
  },
  headerImage: {
    height: 48,
    width: 48,
    fontSize: 48
  },
  headerTitle: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: '-apple-system, "Inter", sans-serif'
  },
  description: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: '-apple-system, "Inter", sans-serif',
    color: 'rgba(0, 0, 0, 0.5);',
    textAlign: 'center'
  },

  footer: {
    position: 'absolute',
    bottom: 20
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dotRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    marginTop: 50
  },
  dotActive: {
    borderRadius: 100,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#000',
    height: 5,
    width: 5,
    margin: 3
  },
  dot: {
    borderRadius: 100,
    borderColor: 'rgba(0, 0, 0, 0.2);',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2);',
    height: 5,
    width: 5,
    margin: 3
  },

  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})