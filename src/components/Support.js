import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate=useNavigate();

    function clickHandler(){
        // move to labs Page
        navigate("/Labs");
    }

    function BackHandler(){
        // move to labs Page
        navigate(-1);
    }

    return (
        <div>
            <div> 
                This is Support Page
            </div>
            <button onClick={clickHandler}>move to labs Page</button>
            <button onClick={BackHandler}>Go Back</button>
        </div>
    );
}
export default Support;