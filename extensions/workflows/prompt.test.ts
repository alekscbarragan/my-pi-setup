import assert from "node:assert/strict";
import test from "node:test";
import {
  WORKFLOW_PROMPT_GUIDELINES,
  WORKFLOW_TOOL_DESCRIPTION,
} from "./prompt.ts";

test("routes ordinary multi-agent workflows through Ben's workflow runtime", () => {
  assert.doesNotMatch(WORKFLOW_TOOL_DESCRIPTION, /ultracode/i);
  assert.match(
    WORKFLOW_TOOL_DESCRIPTION,
    /default multi-agent workflow runtime/i,
  );
  assert.ok(
    WORKFLOW_PROMPT_GUIDELINES.some(
      (guideline) =>
        guideline.includes("ordinary multi-agent workflow requests") &&
        guideline.includes("workflow_admit") &&
        guideline.includes("explicitly asks"),
    ),
  );
});
