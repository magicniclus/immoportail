import { dataBase } from "./firebase.config";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

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

export const addDataToUserDoc = (id, newData) => {
  const reff = doc(dataBaseMaPrimeRenov, id);
  return new Promise((resolve, reject) => {
    updateDoc(reff, newData)
      .then(() => {
        console.log("Data send with success");
        resolve();
      })
      .catch((error) => {
        reject(error);
        console.log("error, data are not send");
      });
  });
};
