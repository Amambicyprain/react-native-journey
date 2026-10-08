# Day 001 — Types make wrong code impossible

## The big idea

Most people think TypeScript is "JavaScript plus labels." That view keeps their knowledge shallow. The real power: **you describe what your data can be, and the compiler refuses to let impossible states exist.**

## Setup

```bash
mkdir momo-core && cd momo-core
npm init -y
npm i -D typescript tsx
npx tsc --init
mkdir src
```

Confirm `"strict": true` in `tsconfig.json`. Never turn it off.

Two separate tools:

| Command | What it does |
|---|---|
| `npx tsx src/index.ts` | **Runs** the code. Does **not** check types. |
| `npx tsc --noEmit` | **Checks** types. Produces no output. |

Code can "run fine" while full of type errors. Always run both.

## The shallow way

```ts
type Transaction = {
  id: string;
  amount: number;
  status: string;
  reference?: string; // only when successful
  reason?: string;    // only when failed
};
```

This allows nonsense:

- `status: "sucessful"` — a typo, and the compiler is happy.
- A failed transaction with a reference — allowed.
- A successful one with no reference — allowed.

The comments tell the truth, but the compiler can't read comments.

## The deep way: literal types and discriminated unions

```ts
type Operator = "MTN" | "ORANGE";

type BaseTx = {
  id: string;
  amount: number; // in XAF
  operator: Operator;
  createdAt: Date;
};

type Transaction =
  | (BaseTx & { status: "PENDING" })
  | (BaseTx & { status: "SUCCESSFUL"; reference: string; completedAt: Date })
  | (BaseTx & { status: "FAILED"; reason: string });

function describe(tx: Transaction): string {
  switch (tx.status) {
    case "PENDING":
      return `Waiting for ${tx.operator} confirmation...`;
    case "SUCCESSFUL":
      return `Paid ${tx.amount} XAF. Ref: ${tx.reference}`;
    case "FAILED":
      return `Failed: ${tx.reason}`;
  }
}
```

### What's happening

1. **Literal union types.** `"MTN" | "ORANGE"` is not "any string" — it's one of exactly two values.
2. **Intersection (`&`).** Combines types, so every variant shares the base fields.
3. **Discriminant + narrowing.** `status` tells TypeScript which variant it's looking at. Inside `case "SUCCESSFUL"`, it *knows* `tx.reference` exists. Inside `case "FAILED"`, `tx.reference` is an error. This is **narrowing** — the most important concept in TypeScript.

The `?` optional fields are gone. Every field exists exactly where it should, and nowhere else.

## Build tasks

1. **Break it on purpose.** Create a `FAILED` transaction with a `reference`. Then one with `status: "sucessful"`. Read each error slowly, all the way through.
2. **Add a new state.** Add `"EXPIRED"` with `expiredAt: Date`. Run `npx tsc --noEmit` *before* updating `describe`. Watch the compiler catch the missing case.
3. **Write `totalSuccessful(txs: Transaction[]): number`** — sum only successful amounts.
4. **Write `countByOperator(txs: Transaction[])`** — how many transactions per operator. Think hard about its return type.
5. **Journal.** Fill in `journal/day-001.md` from the template.

## Next

Day 002: *why* narrowing works, and the `never` type — making "forgot a case" bugs impossible across a whole codebase.
