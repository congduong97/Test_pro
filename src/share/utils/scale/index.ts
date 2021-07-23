import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
	width < height ? [width, height] : [height, width];

//iphoneX, change value if design on diff device
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 736;

const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
const vScale = (size) => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
	size + (scale(size) - size) * factor;
export { scale, vScale, moderateScale };
