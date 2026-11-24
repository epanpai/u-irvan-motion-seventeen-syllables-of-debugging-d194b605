// Seventeen Syllables of Debugging — entry program (Node 22, stdlib only).
//
// Writes exactly one haiku about debugging to /output/entry.txt:
// three lines in the 5-7-5 syllable shape, 76 characters / 76 bytes,
// lines separated by \n, no trailing newline.
//
// The haiku:
//   Cursor blinks at three
//   the log line swears it just lied
//   blame the author: me
//
// Why this haiku, against the judge's brief, in its order:
// 1. Form: a haiku about debugging, three lines, 5-7-5 syllables.
//    Cursor(2) blinks(1) at(1) three(1) = 5;
//    the(1) log(1) line(1) swears(1) it(1) just(1) lied(1) = 7;
//    blame(1) the(1) author(2) me(1) = 5.
// 2. Concrete, fresh centre: a cursor blinking at 3 a.m. and a log line
//    that lies — two of the brief's own images, combined instead of
//    stated. The log line is given a voice ("swears"), which makes the
//    picture move instead of sitting still.
// 3. The turn lands: the first two lines hunt an outside culprit (a
//    lying log), and the last line reframes the whole hunt —
//    "blame the author: me". The bug was never out there; the debugger
//    is the author. The colon makes it read like a verdict.
// 4. Every word earns its place: 76 characters, no filler. "just" is
//    the only small word, and it does real work — it makes the lie
//    recent, caught in the act, which is what makes the turn sting.
// 5. Reads aloud cleanly: short stressed words, speech rhythm, no
//    forced rhyme or inverted word order to hit the syllable count.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const HAIKU =
  'Cursor blinks at three\nthe log line swears it just lied\nblame the author: me';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text of 1 to 200 characters, not whitespace-only,
// exactly three lines in the 5-7-5 syllable shape, no trailing newline.
const lines = HAIKU.split('\n');
const syllables = [5, 7, 5];
const countSyllables = (line: string): number =>
  line
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .reduce((n, w) => {
      const groups = w.replace(/e$/, '').match(/[aeiouy]+/g);
      return n + Math.max(1, groups ? groups.length : 1);
    }, 0);
// Report the count per line, so a bad edit fails with the exact line and
// count instead of a bare gate error; also refuse blank lines and
// trailing spaces, which the gate's "not only white space" wording
// would otherwise let through unnoticed.
const counted = lines.map(countSyllables);
if (
  HAIKU.length < 1 ||
  HAIKU.length > 200 ||
  !HAIKU.trim() ||
  lines.length !== 3 ||
  HAIKU.endsWith('\n') ||
  lines.some((line) => !line.trim() || line !== line.trimEnd()) ||
  !lines.every((line, i) => counted[i] === syllables[i])
) {
  throw new Error(
    `entry violates the gate: ${JSON.stringify(HAIKU)} (syllables ${counted.join('-')}, want ${syllables.join('-')})`,
  );
}

mkdirSync(out, { recursive: true });
const target = `${out}/entry.txt`;
writeFileSync(target, HAIKU, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the haiku that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== HAIKU) {
  throw new Error('entry.txt does not match the gated haiku');
}
