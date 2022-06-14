import { Field, Form, Formik } from "formik";
import ReactDatePicker from "react-datepicker";
import { MainContainer, StldLink } from "../Styles/Page1";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Tournament() {
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    return (
        <MainContainer>
            <div className="top top-left">
                <p>General 2/3</p>
            </div>
            <Formik>
                <Form >
                    <div className="container flex-it flex-it-space-evenly">
                        <div className="left-container">
                            <ReactDatePicker 
                                selected={selectedDate1}
                                onChange={date => setSelectedDate1(date)}
                                placeholderText="Start Date &amp; Time"
                                dateFormat="MMMM d, yyyy"
                                className="field page2-field date-picker"
                                name="startDate"
                            />
                            <Field type="text" name="location" placeholder="Match Location" className="field page2-field" />
                            <Field type="text" name="tournamentName" placeholder="Tournament Name" className="field page2-field" />
                        </div>
                        <div className="mid-container">
                        </div>
                        <div className="right-container">
                            <ReactDatePicker 
                                selected={selectedDate2}
                                onChange={date => setSelectedDate2(date)}
                                placeholderText="End Date &amp; Time"
                                dateFormat="MMMM d, yyyy"
                                className="field page2-field date-picker"
                                name="startDate"
                            />
                            <textarea
                             type='text'
                             rows='20'        
                             placeholder='Comments'
                             className="field comments page2-field" 
                            ></textarea> 
                            <div className="btn-container flex-it ">
                                <StldLink className="flex-it page2-btn" to="/page1">Back</StldLink>
                                <StldLink className="flex-it page2-btn" to="/page3">Next</StldLink>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </MainContainer>
    );
}
export default Tournament;