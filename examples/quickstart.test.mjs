import assert from "node:assert/strict";
import test from "node:test";
import { compareStrings } from "@red-cup-engineering/text-comparison-service";

test("TEXT-COMPARISON-QUICKSTART", () => {
  const result = compareStrings({ subject: "a😀b", query: "😀", caseSensitive: true });
  assert.equal(result.relation, "contains");
  assert.deepEqual(result.spans, [{ matchedText: "😀", start: 1, end: 3 }]);
});
