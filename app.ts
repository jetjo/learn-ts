import * as fs from "fs";
import _ from "lodash";
fs.readFileSync("file.txt", "utf8");
_.chunk(["a", "b", "c", "d"], 2);
