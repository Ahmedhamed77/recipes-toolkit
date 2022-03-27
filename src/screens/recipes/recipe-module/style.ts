import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/styles';

export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  flatListContainer: {
    paddingHorizontal: 16,
  },
  sortingText: {
    textAlign: 'right',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.tundora,
  },
  headerTitle: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: COLORS.dark,
    paddingBottom: 12,
  },

  inputContainer: {
    backgroundColor: COLORS.lightGrey,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});
