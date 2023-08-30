import { useRouter } from "next/navigation";
import ArrowLeftIcon from "../Icons/ArrowLeft";
import styles from "./BackButton.module.scss";

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            type="button"
            className={styles.back}
            onClick={() => router.back()}
        >
            <ArrowLeftIcon fill="currentColor" />
        </button>
    );
};

export default BackButton;
