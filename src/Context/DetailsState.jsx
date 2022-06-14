import { useState } from "react";
import detailsContext from "./detailsContext";

function DetailsState (props) {
    const [details, setDetails] = useState({
        "team1" : "",
        "team2" : "",
        "matchType" : "",
        "tournamentName" : "",
        "startDAT" : "",
        "endDAT" : "",
        "location" : "",
        "comments" : "",
    });
