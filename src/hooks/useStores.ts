import { useContext } from "react";
import { storeContext } from "../contexts";

export const useStores = () => useContext(storeContext);