import { connect } from "react-vuex";
import { useEffect, useState } from "react";
import store from "../store";
const IsGt2 = ({isGt2}) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        return store.subscribe((_,state) => {
            setCount(state.count);
        })
    },[]);
    return (
        <div style={{color: isGt2 ? "red": "black"}}>
            {isGt2 ? "Count is greater than 2 :(": "Count is less than 2 :)"},
            It's actually {count}
        </div>
    ) 
}

export default connect(null, null, null, getters => ({ isGt2: getters.countGratherThan2 }))(IsGt2); 
