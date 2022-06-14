import { Field, Form, Formik } from "formik";
import { MainContainer, StldLink } from "../Styles/Page1";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useState } from "react";

const optionsList1 = [
    {
        label: "Home", value: "Home",
    },
    {
        label: "Away", value: "Away",
    }
]

const optionsList2 = [
    {
        label: "Home", value: "Home",
    },
    {
        label: "Away", value: "Away",
    }
]

function Friendly() {
    const [options, setOptions] = useState({
        optionChosen: ""
    });
    return (
        <MainContainer>
            <div className="top top-left">
                <p>Teams 3/3</p>
            </div>
            <Formik>
                <Form >
                    <div className="container flex-it flex-it-space-evenly">
                        <div className="left-container">
                            <Field type="text" name="Team1Name" placeholder="Team 1 Name" className="field page2-field page3-field" />
                            <hr />
                            <Field type="text" name="Team2Name" placeholder="Team 2 Name" className="field page2-field page3-field" />
                        </div>
                        <div className="mid-container">
                            vs
                        </div>
                        <div className="right-container">
                            <Select name='matchType' placeholder="Home or Away" className='page3-select' options={optionsList1} />
                            <hr />
                            <Select name='matchType' placeholder="Home or Away" className='page3-select' options={optionsList2} />
                            <div className="btn-container flex-it ">
                                <StldLink className="flex-it page3-btn" to="/page2-friendly">Back</StldLink>
                                <StldLink className="flex-it page3-btn" to="/submit">Submit</StldLink>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </MainContainer>
    );
}
export default Friendly;