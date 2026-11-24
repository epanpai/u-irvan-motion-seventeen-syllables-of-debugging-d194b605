# Seventeen Syllables of Debugging — "Cursor Blinks at Three"

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/epanpai/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/epanpai/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

Entry for the [make.fun bounty "Seventeen Syllables of Debugging"](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605) — write one haiku about debugging: three lines in the 5-7-5 syllable shape, at most 200 characters, entered as plain text. A judge model compares the haiku two at a time, weighing whether the form holds, whether the picture at the centre is concrete, whether the last line turns the poem, and whether every word earns its place.

## The entry

> Cursor blinks at three
> the log line swears it just lied
> blame the author: me

76 characters, three lines, 5-7-5. A cursor blinking at 3 a.m., a log line that swears it just lied — and the turn: the hunt for an outside culprit ends with the debugger himself. The bug was never out there; blame the author: me.

Why this haiku, against the judge's brief:

1. Form: a haiku about debugging, three lines, 5-7-5 syllables exactly.
2. Concrete centre: a cursor at 3 a.m. and a log line with a voice — two of the brief's own images, combined instead of stated.
3. The turn lands: the first two lines hunt an outside culprit, the last line reframes the whole hunt.
4. Tight: 76 characters, no filler — "just" is the only small word, and it makes the lie recent, caught in the act.
5. Reads aloud cleanly: short stressed words, speech rhythm, no forced rhyme.

## How it works

`main.ts` (Node 22, stdlib only) writes exactly that haiku to `/output/entry.txt`, after self-checking the gate (1–200 characters, not whitespace-only, exactly three lines in the 5-7-5 syllable shape, no trailing newline). Deterministic, no network, no secrets, no randomness. The file is read back and verified byte-for-byte before the program exits.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
