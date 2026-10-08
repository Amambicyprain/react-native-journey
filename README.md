# From Zero to Expert: React Native (with TypeScript)

A day-by-day record of learning React Native properly — not just making things work, but understanding why they work.

Every day has three parts:

- **Lesson** (`lessons/`) — the concept, explained with real examples
- **Code** (`momo-core/`, later the app) — tagged in git as `day-001`, `day-002`, ... so anyone can check out the exact state of the code on any day
- **Journal** (`journal/`) — what I learned, what confused me, the errors I hit

The running project is **momo-core**: the logic behind a mobile money merchant app (transactions, operators, fees, statuses). It starts as plain TypeScript and grows into a full React Native app.

## How to use this repo (for learners)

1. Read the lesson for the day.
2. Try the build tasks yourself **before** looking at my code.
3. Compare with `git checkout day-00X`.
4. Read my journal entry — my confusion is probably your confusion.

## Roadmap

| Phase | Topic | Days |
|---|---|---|
| 0 | TypeScript and React foundations | 1–28 |
| 1 | React Native core, navigation | 29–56 |
| 2 | Data, state, auth with a Django backend | 57–84 |
| 3 | Device features, offline-first | 85–112 |
| 4 | Testing and shipping to the Play Store | 113–130 |
| 5 | Performance and the New Architecture | months 5–9 |
| 6 | Native modules and open source | months 9–18 |

## Index

| Day | Lesson | Journal | Code |
|---|---|---|---|
| 001 | [Types make wrong code impossible](lessons/day-001-types-make-wrong-code-impossible.md) | [log](journal/day-001.md) | `day-001` |
