import { $ } from "bun";

await $`rm -rf dist`

await Bun.build({
	entrypoints: ['./src/index.ts'],
	outdir: './dist',
	minify: true, // issue.ts failes to run when minify is set to true, but works when set to false
	target: 'node',
});
