import { atom } from "recoil";
import { ScotchType } from "~/types/resources/Scotch";

const ScotchState = atom<ScotchType>({
  key: "ScotchState",
  default: {
    id: "",
    bottleName: "",
    limited: "",
    price: "",
    age: "",
  },
});

export default ScotchState;
