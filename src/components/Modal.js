import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

export default function Modal(props) {
  const { children } = props;

  const dispatch = useDispatch();
  const closeAddModal = state => dispatch(openCloseAddTweetModalAction(state));
  const isOpenAddModal = useSelector(state => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenAddModal}
      onHide={() => closeAddModal(false)}
      size="lg"
      centered
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {children}
    </ModalB>
  );
}
