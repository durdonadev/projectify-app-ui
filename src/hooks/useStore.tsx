import { useContext } from "react";
import { AppContext } from "../context";

export const useStore = () => {
    const { counter, setCounter } = useContext(AppContext);

    return { counter, setCounter };
};
