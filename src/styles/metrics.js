import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  baseRadius: 3,
  basePadding: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
