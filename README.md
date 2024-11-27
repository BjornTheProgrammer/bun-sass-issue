# bun-sass-issue

Issue with bun build when minifing `sass`.

To reproduce the issue, follow these steps

1. Install deps with `bun i`
2. Run the build script `bun run build`
3. Run the issue script `bun run issue`

Observe the following error:

```bash
TypeError: undefined is not an object (evaluating 'Z._Universe_findRule(H, U._primary)[W]')
      at _Parser_parse (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:1:86384)
      at _Universe_evalInEnvironment (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:1:81327)
      at toList$1$growable (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:76:128503)
      at SourceFile$fromString (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:21:5418)
      at SpanScanner$ (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:44:3251)
      at ScssParser$0 (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:54:29463)
      at BuiltInCallable$function0 (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:44:36285)
      at call$0 (/Users/bjorn/Desktop/bun-sass-issue/dist/index.js:195:23613)
      at /Users/bjorn/Desktop/bun-sass-issue/dist/index.js:1:3716
```
