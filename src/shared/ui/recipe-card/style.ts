import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
  },
  rightContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 14,
  },
  leftContent: {
    flex: 1,
  },
  recipeName: {
    paddingBottom: 6,
    fontSize: 22,
    lineHeight: 25,
    letterSpacing: 0.31,
    color: COLORS.tundora,
  },
  recipeDesc: {
    paddingBottom: 4,
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.dustyGray,
  },
  recipeDate: {
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.tundora,
  },
  imageStyle: {
    width: '100%',
    height: 112,
    borderRadius: 10,
  },
});
