import { Dimensions, PixelRatio } from "react-native";
import { moderateScale } from "react-native-size-matters";

let screenWidth = Dimensions.get("window")?.width;
if (screenWidth == null) {
	screenWidth = 0;
}

let screenHeight = Dimensions.get("window")?.height;
if (screenHeight == null) {
	screenHeight = 0;
}

function hp(heightPercent: number | string) {
	const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
	return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
}

function wp(widthPercent: number | string) {
	const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
	return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
}

const normalize = (size: number) => Math.floor(moderateScale(size, screenWidth < 360 ? 1 : 0.5));

export { wp, hp, normalize };
