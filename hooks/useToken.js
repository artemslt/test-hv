import { useSession } from "next-auth/react";

export const useToken = () => {
    const session = useSession();
    const token = session?.data?.user.token;
    return token;
};
