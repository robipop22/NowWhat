import { Platform } from 'react-native'


export const decode = function(t, e) { for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) { a = null, h = 0, i = 0; do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32); n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0; do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32); o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([ l / c, r / c ]) } return d = d.map(function (t) { return { latitude: t[ 0 ], longitude: t[ 1 ] } }) }

export const isIOS = () => {
	return Platform.OS === 'ios';
}

export const updateArrayOfObjects = (updateArray, keyToCompare, valueToCompare, keyToUpdate, valueToUpdate) => {
  /*
      @param updateArray - Array to update, the initial array which will be updated
      @param keyToCompare - key which you want to compare for the update
      @param valueToCompare - value which you want to compare for the update
      @param keyToUpdate - the key which you want to update
      @param valueToUpdate Boolean Value - the value which you want to update
      the function will return a new updated array
  */
	return updateArray.map((objItem) => {
		if (objItem[ keyToCompare ] === valueToCompare) {
			objItem[ keyToUpdate ] = valueToUpdate;
		} else {
			objItem[ keyToUpdate ] = !valueToUpdate;
		}
		return objItem;
	});
};
