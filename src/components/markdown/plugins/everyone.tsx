import styled from "styled-components";

import { createComponent, CustomComponentProps } from "./remarkRegexComponent";

const EveryMention = styled.a`
    gap: 4px;
    flex-shrink: 0;
    padding-left: 2px;
    padding-right: 6px;
    align-items: center;
    display: inline-flex;
    vertical-align: middle;

    cursor: pointer;

    font-weight: 600;
    text-decoration: none !important;
    background: var(--secondary-background);
    border-radius: calc(var(--border-radius) * 2);

    transition: 0.1s ease filter;

    &:hover {
        filter: brightness(0.75);
    }

    &:active {
        filter: brightness(0.65);
    }

    svg {
        width: 1em;
        height: 1em;
    }
`;

export function RenderEveryoneMention({ match }: CustomComponentProps) {
    return (
        <EveryMention>
            @everyone
        </EveryMention>
    );
}

export const remarkEveryoneMention = createComponent("everyonemention", /@everyone/g);