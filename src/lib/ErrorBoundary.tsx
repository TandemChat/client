import axios from "axios";
import localforage from "localforage";
import * as stackTrace from "stacktrace-js";
import styled from "styled-components/macro";

import { useEffect, useErrorBoundary, useState } from "preact/hooks";

import { Button } from "@revoltchat/ui";

import { GIT_REVISION } from "../revision";

const CrashContainer = styled.div`
    // defined for the Button component
    --error: #ed4245;
    --primary-background: #2d2d2d;

    height: 100%;
    padding: 12px;

    background: #191919;
    color: white;

    h3 {
        margin: 0;
        margin-bottom: 12px;
    }

    code {
        font-size: 1.1em;
    }

    .buttonDivider {
        margin: 8px;
    }
`;

interface Props {
    children: Children;
    section: "client" | "renderer";
}

const ERROR_URL = "https://reporting.revolt.chat";

export function reportError(error: Error, section: string) {
    stackTrace.fromError(error).then((stackframes) =>
        axios.post(ERROR_URL, {
            stackframes,
            rawStackTrace: error.stack,
            origin: window.origin,
            commitSHA: GIT_REVISION,
            userAgent: navigator.userAgent,
            section,
        }),
    );
}

export default function ErrorBoundary({ children, section }: Props) {
    const [error, ignoreError] = useErrorBoundary();
    const [confirm, setConfirm] = useState(false);

    async function reset() {
        if (confirm) {
            await localforage.clear();
            location.reload();
        } else {
            setConfirm(true);
        }
    }

    useEffect(() => {
        if (error) {
            reportError(error, section);
        }
    }, [error]);

    if (error) {
        return (
            <CrashContainer>
                {section === "client" ? (
                    <>
                        <h3>Краш-репорт клиента</h3>
                        <Button onClick={ignoreError}>
                            Игнор ошибки
                        </Button>
                        <div class="buttonDivider" />
                        <Button onClick={() => location.reload()}>
                            Обновить страницу
                        </Button>
                        <div class="buttonDivider" />
                        <Button palette="error" onClick={reset}>
                            {confirm ? "Уверены?" : "Сбросить данные приложения"}
                        </Button>
                    </>
                ) : (
                    <>
                        <h3>Component Error</h3>
                        <button onClick={ignoreError}>
                            Ignore error and try render again
                        </button>
                    </>
                )}
                <br />
                <br />
                <div>Tandem крашнулся, вот ошибка:</div>
                <pre>
                    <code>{error?.stack}</code>
                </pre>
                <div>Репорт об ошибке уже составлен.</div>
            </CrashContainer>
        );
    }

    return <>{children}</>;
}
