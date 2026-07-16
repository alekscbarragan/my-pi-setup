import assert from "node:assert/strict";
import test from "node:test";
import registerSubagents from "./index.ts";

test("namespaces every Ben subagent entry point", () => {
  const tools: string[] = [];
  const commands: string[] = [];

  registerSubagents({
    on() {},
    registerTool(tool: { name: string }) {
      tools.push(tool.name);
    },
    registerCommand(name: string) {
      commands.push(name);
    },
    registerMessageRenderer() {},
  } as never);

  assert.deepEqual(tools, [
    "ben_subagent_spawn",
    "ben_subagent_wait",
    "ben_subagent_cancel",
    "ben_subagent_check",
    "ben_subagent_list",
  ]);
  assert.deepEqual(commands, ["ben-subagents"]);
});
