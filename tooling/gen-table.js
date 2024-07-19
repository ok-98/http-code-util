import fs from "fs";
import x from "../dist/http-code-util.umd.cjs";

const { ReasonPhrases, StatusCodes, StatusExplenation } = x;

const [startKey, endKey] = ["<!--codetable:start-->", "<!--codetable:end-->"];

const tableData = Object.entries(StatusCodes).map(([key, value]) => {
    return {
        code: value,
        constant: key,
        reason: ReasonPhrases[key],
        explenation: StatusExplenation[key]
    };
})

const mdTable = [
    "|Code|Constant|Reason Phrase|Explenation|",
    "|---|---|---|---|",
    ...tableData.map(entry => `|${Object.values(entry).join("|")}|`)
].join("\n");

const readme = fs.readFileSync("README.md", "utf8")

const newReadme = readme.replace(new RegExp(`${startKey}([\\s\\S]+)${endKey}`), [startKey, mdTable, endKey].join("\n"));

fs.writeFileSync("README.md", newReadme, "utf8");