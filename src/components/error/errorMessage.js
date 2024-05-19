import React from "react";
import * as Styled from '../../styles/components/movie';
import { useSelector } from "react-redux";

const ErrorMessage = ({ message }) => {


    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage