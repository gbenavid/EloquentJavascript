// Regexp Golf

// Code golf is a term used for the game of trying to express a particular program
// in as few characters as possible. Similarly, regexp golf is the practice of
// writing as tiny a regular expression as possible to match a given pattern, and
// only that pattern.

// For each of the following items, write a regular expression to test whether any
// of the given substrings occur in a string. The regular expression should match
// only strings containing one of the substrings described. Do not worry about word
// boundaries unless explicitly mentioned. When your expression works, see whether
// you can make it any smaller.

// car and cat
RegExp(\cat|car\);
RegExp(\ca[rt]);

// pop and prop
RegExp(\pr?op\);

// ferret, ferry, and ferrari
RegExp(\ferr[et|y|ari]+\);

// Any word ending in ious
RegExp(\w+ious\b\);

// A whitespace character followed by a dot, comma, colon, or semicolon
RegExp(\s[.,;:]\);

// A word longer than six letters
RegExp(\\w{7,}\);

// A word without the letter e
RegExp(\\b[^\We]+\b\);


