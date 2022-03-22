import { useState, useEffect, useCallback } from "react";
import { dequal } from "dequal";
import store from "../../store";
const useVuex = ({ stateSelector, gettersSelector }={}) => {

    const getSelectedState = useCallback(state => {
      return stateSelector && typeof stateSelector === "function" ? stateSelector(state) : state;
    },[stateSelector]);

    const getSelectedGetters = useCallback(getters => {
      return gettersSelector && typeof gettersSelector === "function" ? gettersSelector(getters) : getters;
    },[gettersSelector]);

    const [selectedState, setSelectedState] = useState(getSelectedState(store.state));
    const [selectedGetters, setSelectedGetters] = useState(getSelectedGetters(store.getters));


    useEffect(() => {
        return store.subscribe((_, newStoreState) => {
            const newSelectedState = getSelectedState(newStoreState);
            if(!dequal(selectedState, newSelectedState)){
              setSelectedState(newSelectedState);
            }
            const newSelectedGetters = getSelectedGetters(store.getters);
            if(!dequal(selectedGetters, newSelectedGetters)){
              setSelectedGetters(newSelectedGetters);
            }
        });
    }, [getSelectedState, getSelectedGetters, selectedState, selectedGetters]);
    return {
        ...store,
        state: selectedState,
        getters: selectedGetters,
    }
};

export default useVuex;
