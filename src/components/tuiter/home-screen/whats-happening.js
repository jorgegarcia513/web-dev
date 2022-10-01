import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
import {createTuit} from "../actions/tuits-actions";


const WhatsHappening = () => {

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                    className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75" onChange={(e) =>
                setNewTuit({
                    ...newTuit,
                    tuit: e.target.value,
                })}/>
        </>
    );
}
export default WhatsHappening;