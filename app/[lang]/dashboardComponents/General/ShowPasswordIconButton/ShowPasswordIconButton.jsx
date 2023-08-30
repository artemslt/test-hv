import ShowPasswordIcon from "@/app/[lang]/components/GeneralComponents/Icons/ShowPasswordIcon";
import HidePasswordIcon from "@/app/[lang]/components/GeneralComponents/Icons/HidePasswordIcon";
import styles from "./ShowPasswordIconButton.module.scss";

const ShowPasswordIconButton = ({ showPassword, setShowPassword }) => {
    return (
        <button
            type="button"
            className={styles.button}
            onClick={() => {
                setShowPassword(prevState => !prevState);
            }}
        >
            {showPassword ? (
                <HidePasswordIcon fill="currentColor" />
            ) : (
                <ShowPasswordIcon fill="currentColor" />
            )}
        </button>
    );
};

export default ShowPasswordIconButton;
