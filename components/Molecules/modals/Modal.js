import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../../../redux/action";
import Text from "../../Atoms/texts/Text";

const Modal = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(state.modal.show);
  }, [state.modal.show]);

  useEffect(() => {
    if (state.modal.show) {
      setTimeout(() => {
        dispatch(updateModal({ message: null, show: false }));
        setShow(false);
      }, 3000);
    }
  }, [state.modal.show]);

  return (
    <div
      className={`py-10 px-10 border-2 border-orange bg-white fixed bottom-60 right-16 z-30 rounded-lg shadow-md ${
        show ? "block" : "hidden"
      }`}
    >
      <Text textSize="normal" color="purple">
        {state.modal.message !== null ? state.modal.message : ""}
      </Text>
    </div>
  );
};

export default Modal;
