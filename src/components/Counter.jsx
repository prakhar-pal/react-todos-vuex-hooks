import React from "react";
import { connect } from "react-vuex";
import { actionTypes } from "../actions";

const mapStateToProps = state => ({count: state.count});
const mapDispatchToProps = disaptch => ({
    increment: (value=1) => {
        disaptch(actionTypes.INCREMENT, value);
    },
    decrement: (value=1) => {
        disaptch(actionTypes.DECREMENT, value);
    }
});
const Counter = ({ count, increment, decrement }) => {
    return (
        <>
            The Counter is {count}
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
