import { dataBase } from "./firebase.config";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

const dataBaseMaPrimeRenov = collection(dataBase, "estimation");

export const setUserDoc = (object) => {
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

export const setContactUserDoc = (object) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase, "contact", object.id), object)
      .then((value) => {
        console.log(value);
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setUnsubcribeUserDoc = (object) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase, "unsubscribe", object.id), object)
      .then((value) => {
        console.log(value);
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setNewsLettersUserDoc = (object) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase, "newsLetters", object.id), object)
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
