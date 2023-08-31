import { useParams } from "next/navigation";

export const useLang = () => {
    const params = useParams();
    console.log("is :>> ", "is");
    console.log("params.lang :>> ", params.lang);
    return params.lang;
};
