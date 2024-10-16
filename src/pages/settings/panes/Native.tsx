import { Refresh } from "@styled-icons/boxicons-regular";

import { useEffect, useState } from "preact/hooks";

import { Button, CategoryButton, Checkbox, Tip } from "@revoltchat/ui";

import RLogo from "../assets/revolt_r.svg";

export function Native() {
    if (typeof window.native === "undefined") return null;
    /* eslint-disable react-hooks/rules-of-hooks */

    const [config, setConfig] = useState(window.native.getConfig());
    const [autoStart, setAutoStart] = useState<boolean | undefined>();
    const fetchValue = () => window.native.getAutoStart().then(setAutoStart);

    const [hintReload, setHintReload] = useState(false);
    const [hintRelaunch, setHintRelaunch] = useState(false);
    const [confirmDev, setConfirmDev] = useState(false);

    useEffect(() => {
        fetchValue();
    }, []);

    return (
        <div style={{ marginTop: "10px" }}>
            <Tip>Некоторые опции могут потребовать перезапуска.</Tip>
            <h3>Поведение приложения</h3>
            <Checkbox
                value={autoStart ?? false}
                disabled={typeof autoStart === "undefined"}
                onChange={async (v) => {
                    if (v) {
                        await window.native.enableAutoStart();
                    } else {
                        await window.native.disableAutoStart();
                    }

                    setAutoStart(v);
                }}
                title="Автозапуск"
                description="Автозапуск Tandem при запуске ПК."
            />

            <Checkbox
                value={config.minimiseToTray}
                onChange={(minimiseToTray) => {
                    window.native.set("minimiseToTray", minimiseToTray);
                    setConfig({
                        ...config,
                        minimiseToTray,
                    });
                }}
                title="Спрятать в трей"
                description="Вместо закрытия, Tandem спрячется в трей."
            />
            <Checkbox
                value={config.discordRPC}
                onChange={(discordRPC) => {
                    window.native.set("discordRPC", discordRPC);
                    setConfig({
                        ...config,
                        discordRPC,
                    });
                }}
                title="Включить статус Discord"
                description="Отображает Tandem как статус Discord."
            />
            {/* <Checkbox
                value={config.build === "nightly"}
                onChange={(nightly) => {
                    const build = nightly ? "nightly" : "stable";
                    window.native.set("build", build);
                    setHintReload(true);
                    setConfig({
                        ...config,
                        build,
                    });
                }}
                title="Revolt Nightly"
                description="Use the beta branch of Revolt."
            /> */}

            <h3>Заголовок окна</h3>
            <Checkbox
                value={!config.frame}
                onChange={(frame) => {
                    window.native.set("frame", !frame);
                    setHintRelaunch(true);
                    setConfig({
                        ...config,
                        frame: !frame,
                    });
                }}
                title="Кастомный заголовок окна"
                description="Позволяет Tandem использовать свой заголовок окна."
            />
            {/* <Checkbox //FIXME: In Titlebar.tsx, enable .quick css
                disabled={true}
                value={!config.frame}
                onChange={(frame) => {
                    window.native.set("frame", !frame);
                    setHintRelaunch(true);
                    setConfig({
                        ...config,
                        frame: !frame,
                    });
                }}
                title="Включить кнопки быстрых действий"
                description="Показывать кнопки мут/заглушить в заголовке окна."
            /> */}
            <h3>Продвинутые</h3>
            <Checkbox
                value={config.hardwareAcceleration}
                onChange={async (hardwareAcceleration) => {
                    window.native.set(
                        "hardwareAcceleration",
                        hardwareAcceleration,
                    );
                    setHintRelaunch(true);
                    setConfig({
                        ...config,
                        hardwareAcceleration,
                    });
                }}
                title="Аппаратное ускорение"
                description="Использует GPU для рендера приложения, отключите, если вы стокнулись с визуальными проблемами."
            />

            <p style={{ display: "flex", gap: "8px" }}>
                <Button
                    palette="secondary"
                    compact
                    disabled={!hintReload}
                    onClick={window.native.reload}>
                    Перезагрузить страницу
                </Button>
                <Button
                    palette="secondary"
                    compact
                    disabled={!hintRelaunch}
                    onClick={window.native.relaunch}>
                    Перезагрузить приложение
                </Button>
            </p>{/*
            <h3 style={{ marginTop: "4em" }}>Local Development Mode</h3>
            config.build === "dev" ? (
                <>
                    <h5>Development mode is currently on.</h5>
                    <Button
                        palette="secondary"
                        compact
                        onClick={() => {
                            window.native.set("build", "stable");
                            window.native.reload();
                        }}>
                        Exit Development Mode
                    </Button>
                </>
            ) : (
                <>
                    <Checkbox
                        value={confirmDev}
                        onChange={setConfirmDev}
                        title="I understand there's no going back."
                        description={
                            <>
                                {
                                    "This will change the app to the 'dev' branch, instead loading the app from a local server on your machine."
                                }
                                <br />
                                <b>
                                    {"Without a server running, "}
                                    <span style={{ color: "var(--error)" }}>
                                        {"the app will not load!"}
                                    </span>
                                </b>
                                <br />
                                {
                                    "Make sure the app is available on port 3001 by running "
                                }
                                <code>{"yarn dev --port 3001 --host"}</code>
                                {"."}
                            </>
                        }
                    />
                    <p>
                        <Button
                            palette="error"
                            compact
                            disabled={!confirmDev}
                            onClick={() => {
                                window.native.set("build", "dev");
                                window.native.reload();
                            }}>
                            Enter Development Mode
                        </Button>
                    </p>
                </>
            )*/}
            <hr />
            <CategoryButton
                // icon={<img src={RLogo} draggable={false} />}
                description={<span>версия {window.nativeVersion}</span>}
                action={<Refresh size={24} />}>
                Tandem for Desktop
            </CategoryButton>
        </div>
    );
}
