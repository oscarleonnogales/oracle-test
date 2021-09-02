const getOutput = (phrase, number, words) => {
	let inputPhrase = phrase.split(' ');
	let outputPhrase = [];
	let highlightedCounter = 0;

	inputPhrase.forEach((word) => {
		if (words.includes(word) && highlightedCounter < number) {
			outputPhrase.push(`/*${word}*/`);
			highlightedCounter++;
		} else outputPhrase.push(word);
	});

	return outputPhrase.join(' ');
};

console.log(
	getOutput(
		'manufacturing sees its weight in the index raised by slightly more than two percentage than the previous years',
		1,
		['manufacturing']
	)
);

console.log(getOutput('maroonnoonmoonman', 1, ['oon']));
