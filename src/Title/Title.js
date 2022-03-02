import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../redux/actions";
import {inputReducer} from "../redux/inputReducer";

const Title = () => {

    const dispatch = useDispatch()
    const text = useSelector((state) =>{
        const {inputReducer} = state
        return inputReducer.text
    })

    const handleChange = (event) => {
        dispatch(inputText(event.target.value))
    }

    return (
        <div className="card-title">
            <div className="card-title-props">
                <input type="text" onChange={handleChange}/>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Title;