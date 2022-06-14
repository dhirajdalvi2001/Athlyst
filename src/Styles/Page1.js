import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    margin: 100px auto;
    width: 1100px;
    height: 700px;
    border: 1px solid grey;
    overflow: hidden;
    border-radius: 4px;

    .top {
        background-color: red;
        color: #fff;
    }

    .top-left {
        display: block;
    }

    p {
        margin: 0 20px 0;
        font-size: 16px;
        width: fit-content;
    }

    table, th, td {
        border: 1px solid;
        width: auto;
    }

    .field {
        margin: 40px;
        margin-bottom: 0;
        width: 200px;
        height: 30px;
        outline: none;
        border-radius: 4px;
        text-indent: 14px;
        font-family: "calibri";
        font-size: 16px;
    }

    .page2-field {
        margin: 40px auto 0;
        width: 70%;
        height: 34px;
        border: 1px solid grey;
    }

    .page3-field {
        margin: 40px auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .page3-select {
        margin: 40px auto 40px;
        width: 70%;
        border-radius: 4px;
        border: 1px solid grey;
    }

    .btn-next {
        margin: 514px 0 0 288px;
        width: 190px;
        height: 36px;
        min-height: 30px;
        font-size: 20px;
        color: #fff;
        background-color: red;
        border: 0;
    }

    .date-picker {
        margin: 40px auto 0;
        width: 70%;
        display: flex;
        justify-content: center;
    }

    .container {
        width: 1100px;
        height: 680px;
        border: none;
        border-radius: 4px;
    }

    .left-container {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .right-container {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .mid-container {
        font-size: 26px;
        color: grey;
        opacity: 0.5;
        height: 50%;
        width: 3%;
    }

    .comments {
        height: 50%;
    }

    .btn-container {
        margin: 50px auto;
        width: 390px;
        justify-content: space-between;
    }

    .page2-btn {
        margin: 0;
        width: 190px;
    }

    .page3-btn {
        margin: 62px 0 0;
        width: 190px;
    }

    hr {
        margin: 80px auto 80px;
        width: 60%;
    }
`

export const StldLink = styled(Link)`
    margin-top: 490px;
    width: 130px;
    height: 36px;
    font-size: 20px;
    color: #fff;
    background-color: red;
    border: 0;
    text-decoration: none;
`