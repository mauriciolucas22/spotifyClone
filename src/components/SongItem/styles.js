import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
  },

  title: {
    color: colors.white,
    fontSize: 15,
  },

  author: {
    color: colors.dark,
    fontSize: 12,
  },

  icon: {
    color: colors.dark,
    marginTop: 3,
  },

  loading: {
    marginRight: 2,
  },

  active: {
    color: colors.active,
  },
});

export default styles;
