import { createContext, useState } from "react";

export const detailsContext = createContext();

function DetailsContextProvider (props) {
    const [details, setDetails] = useState({
        "team1" : "asddd",
        "team2" : "ddsaa",
        "matchType" : "asdasd",
        "tournamentName" : "asdd",
        "startDAT" : "dsa",
        "endDAT" : "asd",
        "location" : "dsa",
        "comments" : "dsa",
    });
    return (
        <detailsContext.Provider value={{details, setDetails}}>
            {props.children}
        </detailsContext.Provider>
    );
}

export default DetailsContextProvider;