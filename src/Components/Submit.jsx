import { MainContainer } from "../Styles/Page1";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { detailsContext } from "../Context/detailsContext";

function Submit() {
    const {details} = useContext(detailsContext);
    return (
        <MainContainer>
            <table cellSpacing="2px" cellPadding="5px">
                <tr className="top">
                        <th><p>Team 1</p></th>
                        <th><p>Team 2</p></th>
                        <th><p>Match Type</p></th>
                        <th><p>Tournament Name</p></th>
                        <th><p>Start Date &amp; Time</p></th>
                        <th><p>End Date &amp; Time</p></th>
                        <th><p>Location</p></th>
                        <th><p>Comments</p></th>
                </tr>
                <tr>
                        <td>{details.team1}</td>
                        <td>{details.team2}</td>
                        <td>{details.matchType}</td>
                        <td>{details.tournamentName}</td>
                        <td>{details.startDAT}</td>
                        <td>{details.endDAT}</td>
                        <td>{details.location}</td>
                        <td>{details.comments}</td>
                </tr>
            </table>
        </MainContainer>
    );
}
export default Submit;