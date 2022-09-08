import { getLogseqTags } from './logseq';
const main = () => {
	if (process.argv.length < 3) {
		console.info('Usage: npm start <path-to-logseq-content>');
		return;
	}

	console.log(getLogseqTags(process.argv[2]).join(', '));
};

main();

export {};
