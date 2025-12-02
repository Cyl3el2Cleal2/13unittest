# 13unittest

TypeScript project with a merge function and comprehensive tests.

## Setup

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Function API

```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

- `collection_1`: descending order (processed from end)
- `collection_2` & `collection_3`: ascending order (processed from start)

⚠️ Function modifies input arrays (uses `pop()` and `shift()`)

## Project Structure

```
src/
├── function.ts      # Merge function
├── function.test.ts # Tests
└── main.ts          # Entry point
```
