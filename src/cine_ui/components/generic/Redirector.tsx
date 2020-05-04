import React, { useEffect, useState } from "react";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import { Redirect } from "react-router-dom";

const Redirector: React.FC = () => {
    const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        CineEnvironment.getCine().cineState.onRedirect = (url) => {
            setRedirectUrl(url);
        };
    }, []);

    useEffect(() => {
        CineEnvironment.getCine().cineState.handleRedirected();
    }, [redirectUrl])

    if (redirectUrl !== undefined) {
        return (<Redirect to={redirectUrl} />);
    }

    return (<></>);
};

export default Redirector;