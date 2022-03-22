import { connect } from "react-vuex";
import { useEffect, useState } from "react";
import useVuex from "./hooks/useVuex";
const IsGt2 = (/*{isGt2}*/) => {
    const { getters: isGt2, state: count } = useVuex({ gettersSelector: getters => getters.countGreaterThan2, stateSelector: state => state.count });
    return (
        <div style={{color: isGt2 ? "red": "black"}}>
            {isGt2 ? "Count is greater than 2 :(": "Count is less than 2 :)"},
            It's actually {count}
        </div>
    )
}

export default IsGt2;
