import React from "react";
import { connect } from "react-vuex";
import { actionTypes } from "../actions";
import useVuex from "./hooks/useVuex";

const Counter = () => {
    const { state: count , dispatch, getters } = useVuex({
      stateSelector: state => state.count
    });

    const handleIncrement = () => dispatch(actionTypes.INCREMENT);
    const handleDecrement = () => dispatch(actionTypes.DECREMENT);
    return (
        <>
            The Counter is {count}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}
export default Counter;
