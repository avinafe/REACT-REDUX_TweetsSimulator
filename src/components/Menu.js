import React from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import LogoRedux from "../assets/img/redux.png";

export default function Menu() {
  const dispatch = useDispatch();
  const openCloseAddTweetModal = state =>
    dispatch(openCloseAddTweetModalAction(state));

  const openAddModal = () => openCloseAddTweetModal(true);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="Tweets Simulator Redux"
            src={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block aling-top mr-4"
          />
          Tweets Simulator REDUX
        </Navbar.Brand>
        <Button variant="outline-success" onClick={openAddModal}>
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  );
}
