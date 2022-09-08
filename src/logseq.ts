import { readdirSync, readFileSync } from 'fs';

export const getLogseqTags = (pathToLogseqContent: string) => {
	const logseqTags: string[] = [];

	readdirSync(`${pathToLogseqContent}/pages`).forEach(file => {
		let tag = file.substring(0, file.length - 3);

		const fileContent = readFileSync(`${pathToLogseqContent}/pages/${file}`, { encoding: 'utf-8' });

		const lines = fileContent.split('\n');
		for (const line of lines) {
			const titleString = 'title:: ';

			if (line.startsWith(titleString)) {
				tag = line.substring(titleString.length);
				return;
			}
		}

		if (!logseqTags.includes(tag)) {
			logseqTags.push(tag);
		}
	});

	return logseqTags;
};
