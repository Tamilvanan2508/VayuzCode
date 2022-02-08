import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    height: 40,
    backgroundColor: 'purple',
  },
  header: {
    position: 'absolute',
    top: 50,
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 22,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 50,
  },
});

export default styles;
