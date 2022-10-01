import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {createTuit, findAllTuits}
    from "../actions/tuits-actions.js";
import TuitListItem
    from "./tuit-list-item";


const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);


    return (
        <>
        <ul className="ttr-tuits list-group">
            {
                    tuits.map && tuits.map(tuit => (
                        <>
                            <TuitListItem key={tuit._id} tuit={tuit}/>
                        </>))

            }
        </ul>
        </>
    );
}

export default TuitList;