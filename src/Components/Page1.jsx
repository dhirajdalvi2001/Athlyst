import { useContext, useState } from 'react';
import Select from 'react-select';
import detailsContext from '../Context/detailsContext';
import { MainContainer, StldLink } from "../Styles/Page1";

const optionsList =[
    {
        label: "Friendly", value: "Friendly",
    }, {
        label: "Tournament", value: "Tournament",
    }
]

function Page1() {
    const [options, setOptions] = useState({
        "matchType": ""
    });
    // const {details, setDetails} = useContext(detailsContext);

    return (
            <MainContainer>
                <div className="top top-left">
                    <p>Type 1/3</p>
                </div>
                <div className="container flex-it flex-it-space-evenly">
                    <div className="left-container">
                        <Select name='matchType' placeholder="Match Type" className='field' options={optionsList}
                            onChange={(e) => {
                                setOptions({value: e.value});
                                console.log(options);
                                // console.log(details);
                            }}
                            />
                    </div>
                    <div className="right-container"> 
                        <StldLink className="flex-it btn-next" to={
                            (options.value == null ? "/" : options.value == "Friendly"? "/page2-friendly" : "/page2-tournament")
                        }>Next</StldLink>
                    </div>
                </div>
            </MainContainer>
    );
}
export default Page1;