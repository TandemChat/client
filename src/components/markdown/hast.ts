import { passThroughComponents } from "./plugins/remarkRegexComponent";
import { timestampHandler } from "./plugins/timestamps";

export const handlers = {
    ...passThroughComponents("emoji", "everyonemention", "spoiler", "mention", "channel"),
    timestamp: timestampHandler,
};
