import { useParams } from "next/navigation";

export const useLang = () => {
    const params = useParams();
    return params.lang;
};
