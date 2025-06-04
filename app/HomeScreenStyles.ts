import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3954',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: 6,
    color: '#1d3954',
    fontWeight: '600',
  },
  titleContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 4,
  },
  grid: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: 'white',
    width: '48%',
    aspectRatio: 1.4,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  gridLabel: {
    marginTop: 12,
    fontWeight: '600',
    color: '#1d3954',
    fontSize: 16,
  },
});
