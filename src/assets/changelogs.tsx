import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { JSX } from "preact";

import usernameAnim from "../controllers/modals/components/legacy/usernameUpdateLottie.json";

type Element =
    | string
    | {
          type: "image";
          src: string;
          shadow?: boolean;
      }
    | { type: "element"; element: JSX.Element };

export interface ChangelogPost {
    date: Date;
    title: string;
    content: Element[];
}

export const changelogEntries: Record<number, ChangelogPost> = {
    // 1: {
    //     date: new Date("2022-06-12T20:39:16.674Z"),
    //     title: "Title",
    //     content: [
    //         "Paragraph.",
    //         {
    //             type: "image",
    //             src: "https://autumn.revolt.chat/attachments/E21kwmuJGcASgkVLiSIW0wV3ggcaOWjW0TQF7cdFNY/image.png",
    //         },
    //         "Paragraph.",
    //         {
    //             type: "image",
    //             src: "https://autumn.revolt.chat/attachments/LWRYoKR2tE1ggW_Lzm547P1pnrkNgmBaoCAfWvHE74/image.png",
    //         },
    //         "Paragraph!",
    //     ],
    // }
};

export const changelogEntryArray = Object.keys(changelogEntries).map(
    (index) => changelogEntries[index as unknown as number],
);

export const latestChangelog = changelogEntryArray.length;
