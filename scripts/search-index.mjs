import fs from 'node:fs';
import * as pagefind from 'pagefind';

const SOURCE = '.next/server/app';
// out/ is what ships; next dev serves the search index from public/
const OUTPUTS = ['out/_pagefind', 'public/_pagefind'];

function fail(step, errors) {
	console.error(`Pagefind ${step} failed:\n${errors.join('\n')}`);
	process.exit(1);
}

const { index, errors: createErrors } = await pagefind.createIndex();
if (!index) fail('createIndex', createErrors);

const { page_count, errors: addErrors } = await index.addDirectory({ path: SOURCE });
if (addErrors.length) fail('addDirectory', addErrors);
if (page_count === 0) fail('addDirectory', [`no pages found in ${SOURCE}, run next build first`]);

for (const outputPath of OUTPUTS) {
	// Pagefind writes over its output folder without clearing it, and next build copies public/ into out/,
	// so without this the previous build's index files would ship next to the new ones
	fs.rmSync(outputPath, { recursive: true, force: true });
	const { errors } = await index.writeFiles({ outputPath });
	if (errors.length) fail(`writeFiles to ${outputPath}`, errors);
}

await pagefind.close();
console.log(`Pagefind: read ${page_count} HTML files, wrote the index to ${OUTPUTS.join(' and ')}`);
