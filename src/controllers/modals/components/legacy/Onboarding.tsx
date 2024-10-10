import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./Onboarding.module.scss";
import { Text } from "preact-i18n";
import { useState } from "preact/hooks";

import { Button, Preloader } from "@revoltchat/ui";

// import wideSVG from "/assets/wide.svg";
import background from "./assets/onboarding_background.svg";

import FormField from "../../../../pages/login/FormField";
import { takeError } from "../../../client/jsx/error";
import { ModalProps } from "../../types";

interface FormInputs {
    username: string;
}

export function OnboardingModal({
    callback,
    ...props
}: ModalProps<"onboarding">) {
    const { handleSubmit, register } = useForm<FormInputs>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const onSubmit: SubmitHandler<FormInputs> = ({ username }) => {
        setLoading(true);
        callback(username, true)
            .then(() => props.onClose())
            .catch((err: unknown) => {
                setError(takeError(err));
                setLoading(false);
            });
    };

    return (
        <div className={styles.onboarding}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>{"Добро пожаловать в Tandem."}</h1>
                </div>
                <div className={styles.form}>
                    {loading ? (
                        <Preloader type="spinner" />
                    ) : (
                        <>
                            <p>
                                {"Время выбрать имя пользователя!"}
                                <br />
                                {
                                    "Люди смогут найти, опознать и упомянуть Вас с этим именем, так что выбирайте с умом."
                                }
                                <br />
                                {
                                    "Вы можете его всегда изменить в Настройках."
                                }
                            </p>
                            <form
                                onSubmit={
                                    handleSubmit(
                                        onSubmit,
                                    ) as unknown as JSX.GenericEventHandler<HTMLFormElement>
                                }>
                                <div>
                                    <FormField
                                        type="username"
                                        register={register}
                                        showOverline
                                        error={error}
                                    />
                                </div>
                                <p>
                                    Вам автоматически будет присвоен тег-число,
                                    его вы можете найти в настроках.
                                </p>
                                <Button palette="accent">
                                    {"Выглядит неплохо!"}
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <img src={background} />
        </div>
    );
}
