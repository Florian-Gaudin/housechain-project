import { useSession } from "next-auth/react";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { tokenExpiration } from "@/services/auth";

const RefreshTokenHandler = (props) => {
    const { data: session } = useSession();

    useEffect(() => {
        if (!!session) {
            const tokenDecoded = jwt_decode(session.token);
            // duration token 1 hour so refresh it every 55 minutes
            const timeRemaining = tokenExpiration(tokenDecoded);
            props.setInterval(timeRemaining > 0 ? timeRemaining : 0);
        }
    }, [session, props]);

    return null;
};

export default RefreshTokenHandler;
