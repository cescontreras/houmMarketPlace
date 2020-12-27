
export const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

export const toTitleCase = (phrase) => {
	let noDashes = phrase.replace(/-/g, " ")
  return noDashes
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};