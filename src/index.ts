import * as sass from 'sass';

// On a completely unrelated note, sass-embedded just hangs forever,
// no matter what you do when built.
// import * as sass from 'sass-embedded';

export const content = sass.compileString(`body {
	background-color: #fff,
}`).css;
