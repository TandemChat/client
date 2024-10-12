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
    1: {
        date: new Date("2024-10-11T20:39:16.674Z"),
        title: "@everyone, мы добавили пинг @everyone!",
        content: [
            "Мы добавили возможность отправлять пинг @everyone! Так что, теперь вы можете держать всех на своём сервере в курсе новостей.",
            // {
            //     type: "image",
            //     src: "https://autumn.revolt.chat/attachments/E21kwmuJGcASgkVLiSIW0wV3ggcaOWjW0TQF7cdFNY/image.png",
            // },
            "В будущем мы добавим отдельное право на использование @everyone, пока что доступ есть у всех, у кого есть право на упоминания. Упоминания ролей так же будут позже.",
        ],
    }
};

export const changelogEntryArray = Object.keys(changelogEntries).map(
    (index) => changelogEntries[index as unknown as number],
);

export const latestChangelog = changelogEntryArray.length;
