function zigZag(text, nRows) {
	if (typeof text !== 'string') throw new Error('Input text must be string.');
	if (typeof nRows !== 'number') throw new Error('Input nRows must be number.');

	var arr = Array(nRows).fill('');
	var loop = 2 * nRows - 2;
	text.split('').forEach((letter, index) => {
		x = index % loop;
		row = x >= nRows ? (loop - x) : x;
		arr[row] += text[index];
	});
	return arr.join('');
}

module.exports =  zigZag;
