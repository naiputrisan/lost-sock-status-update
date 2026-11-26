// Lost Sock Status Update — one status update in the voice of a lost sock.
//
// The program writes exactly one line to /output/entry.txt: the status update
// itself, with no trailing newline and no extra output, so the sealed gate
// sees plain UTF-8 text of 1 to 120 characters.
import { writeFileSync } from "node:fs";

const STATUS =
  "I escaped the drawer and I'm riding the Roomba now. No regrets. No plans to come home.";

// The gate only accepts 1 to 120 characters on a single line, so fail loudly
// here instead of shipping a line the judge would never see.
if (STATUS.length < 1 || STATUS.length > 120 || STATUS.includes("\n")) {
  throw new Error(
    `status update must be one line of 1-120 characters, got ${STATUS.length}`,
  );
}

writeFileSync("/output/entry.txt", STATUS, "utf8");
