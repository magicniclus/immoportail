import { dataBase } from "./firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";

const dataBaseMaPrimeRenov = collection(dataBase, "estimation");

export const setUserDoc = (object) => {
  console.log(object.id);
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase, "estimation", object.id), object)
      .then((value) => {
        console.log(value);
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
