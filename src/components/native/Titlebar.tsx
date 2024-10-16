import { Wrench } from "@styled-icons/boxicons-solid";
import styled, { css } from "styled-components/macro";

import UpdateIndicator from "../common/UpdateIndicator";

interface Props {
    overlay?: boolean;
}

const TitlebarBase = styled.div<Props>`
    height: var(--titlebar-height);
    display: flex;
    user-select: none;
    align-items: center;

    ${(props) =>
        props.overlay &&
        css`
            position: fixed;
            width: 100%;
        `}

    .drag {
        flex-grow: 1;
        -webkit-app-region: drag;
        margin-top: 10px;
        height: 100%;
    }

    .quick {
        color: var(--secondary-foreground);

        > div,
        > div > div {
            width: var(--titlebar-height) !important;
        }

        &.disabled {
            color: var(--error);
        }

        &.unavailable {
            background: var(--error);
        }
    }

    .title {
        -webkit-app-region: drag;
        /*height: var(--titlebar-height);*/
        font-size: 16px;
        font-weight: 600;
        margin-inline-start: 10px;
        margin-top: 10px;
        gap: 6px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        z-index: 90000;
        color: var(--titlebar-logo-color);

        svg {
            margin-bottom: 10px;
        }

        svg:first-child {
            height: calc(var(--titlebar-height) / 3);
        }
    }

    .actions {
        z-index: 100;
        display: flex;
        align-items: center;
        margin-inline-start: 6px;

        div {
            width: calc(
                var(--titlebar-height) + var(--titlebar-action-padding)
            );
            height: var(--titlebar-height);

            display: grid;
            place-items: center;
            transition: 0.2s ease color;
            transition: 0.2s ease background-color;

            &:hover {
                background: var(--primary-background);
            }

            &.error:hover {
                background: var(--error);
            }
        }
    }
`;

export function Titlebar(props: Props) {
    return (
        <TitlebarBase {...props}>
            <div className="title">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 193.733 37.438">
                    <path
                        d="M23.393,1.382c0,2.787-1.52,4.46-4.764,4.46H13.258V-2.977H18.63C21.873-2.977,23.393-1.254,23.393,1.382Zm-24-11.555,5.2,7.213V25.4h8.666V11.973h2.078l7.4,13.43h9.781l-8.21-14.089A10.355,10.355,0,0,0,32.212,1.027c0-6.183-4.358-11.2-13.075-11.2Zm60.035,0H37.634V25.4H59.426V18.46H46.3v-7.8H57.906V3.966H46.3V-2.969H59.426Zm20.981,26.86-8.818-26.86H62.365L74.984,25.4H85.83L98.449-10.173H89.276Zm56.659-9.173c0-10.693-8.058-18.194-18.194-18.194-10.085,0-18.3,7.5-18.3,18.194a17.9,17.9,0,0,0,18.3,18.244A17.815,17.815,0,0,0,137.066,7.514Zm-27.62,0c0-6.335,3.649-10.338,9.426-10.338,5.676,0,9.376,4,9.376,10.338,0,6.233-3.7,10.338-9.376,10.338C113.095,17.852,109.446,13.747,109.446,7.514ZM141.88-10.173V25.4H161.9v-6.95H150.545V-10.173Zm22.248,7.2h9.426V25.4h8.666V-2.975h9.426v-7.2H164.128Z"
                        transform="translate(1.586 11.18)"
                        fill="var(--titlebar-logo-color)"
                        stroke="var(--titlebar-logo-color)"
                        stroke-width="1"
                    />
                </svg> */}
                <svg width="50pt" viewBox="10 13 221 43" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1.586 11.18)"
                        fill="var(--titlebar-logo-color)"
                        stroke="var(--titlebar-logo-color)"
                        stroke-width="1"><path d="M 79.688 42.188 L 70.313 42.188 L 70.313 9.375 L 93.75 9.375 L 93.75 14.063 L 98.438 14.063 L 98.438 42.188 L 89.063 42.188 L 89.063 14.063 L 79.688 14.063 L 79.688 42.188 Z M 60.938 42.188 L 37.5 42.188 L 37.5 37.5 L 32.813 37.5 L 32.813 28.125 L 37.5 28.125 L 37.5 23.438 L 51.563 23.438 L 51.563 14.063 L 42.188 14.063 L 42.188 18.75 L 32.813 18.75 L 32.813 14.063 L 37.5 14.063 L 37.5 9.375 L 56.25 9.375 L 56.25 14.063 L 60.938 14.063 L 60.938 42.188 Z M 168.75 42.188 L 150 42.188 L 150 37.5 L 145.313 37.5 L 145.313 14.063 L 150 14.063 L 150 9.375 L 168.75 9.375 L 168.75 14.063 L 173.438 14.063 L 173.438 28.125 L 154.688 28.125 L 154.688 37.5 L 164.063 37.5 L 164.063 32.813 L 173.438 32.813 L 173.438 37.5 L 168.75 37.5 L 168.75 42.188 Z M 192.188 42.188 L 182.813 42.188 L 182.813 9.375 L 201.563 9.375 L 201.563 14.063 L 206.25 14.063 L 206.25 42.188 L 196.875 42.188 L 196.875 14.063 L 192.188 14.063 L 192.188 42.188 Z M 23.438 42.188 L 9.375 42.188 L 9.375 37.5 L 4.688 37.5 L 4.688 14.063 L 0 14.063 L 0 9.375 L 4.688 9.375 L 4.688 0 L 14.063 0 L 14.063 9.375 L 23.438 9.375 L 23.438 14.063 L 14.063 14.063 L 14.063 37.5 L 23.438 37.5 L 23.438 42.188 Z M 135.938 42.188 L 112.5 42.188 L 112.5 37.5 L 107.813 37.5 L 107.813 14.063 L 112.5 14.063 L 112.5 9.375 L 126.563 9.375 L 126.563 0 L 135.938 0 L 135.938 42.188 Z M 206.25 14.063 L 210.938 14.063 L 210.938 42.188 L 220.313 42.188 L 220.313 14.063 L 215.625 14.063 L 215.625 9.375 L 206.25 9.375 L 206.25 14.063 Z M 117.188 37.5 L 126.563 37.5 L 126.563 14.063 L 117.188 14.063 L 117.188 37.5 Z M 42.188 37.5 L 51.563 37.5 L 51.563 28.125 L 42.188 28.125 L 42.188 37.5 Z M 154.688 23.438 L 164.063 23.438 L 164.063 14.063 L 154.688 14.063 L 154.688 23.438 Z" vector-effect="non-scaling-stroke"/></g></svg>
                {window.native.getConfig().build === "dev" && (
                    <Wrench size="12.5" />
                )}
            </div>
            {/* <div className="actions quick">
                <Tooltip
                    content="Mute"
                    placement="bottom">
                    <div onClick={window.native.min}>
                        <Microphone size={15}/>
                    </div>
                </Tooltip>
                <Tooltip
                    content="Deafen"
                    placement="bottom">
                    <div onClick={window.native.min}>
                        <VolumeFull size={15}/>
                    </div>
                </Tooltip>
            </div> */}
            <div className="drag" />
            <UpdateIndicator style="titlebar" />
            <div className="actions">
                <div onClick={window.native.min}>
                    <svg
                        aria-hidden="false"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12">
                        <rect
                            fill="currentColor"
                            width="10"
                            height="1"
                            x="1"
                            y="6"
                        />
                    </svg>
                </div>
                <div onClick={window.native.max}>
                    <svg
                        aria-hidden="false"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12">
                        <rect
                            width="9"
                            height="9"
                            x="1.5"
                            y="1.5"
                            fill="none"
                            stroke="currentColor"
                        />
                    </svg>
                </div>
                <div onClick={window.native.close} className="error">
                    <svg
                        aria-hidden="false"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12">
                        <polygon
                            fill="currentColor"
                            stroke-width="1"
                            fill-rule="evenodd"
                            points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                            style="stroke:currentColor;stroke-width:0.4"
                        />
                    </svg>
                </div>
            </div>
        </TitlebarBase>
    );
}
