import { Box, Icon, Modal } from "@mui/material";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SendBtn from "../SendBtn";
import { useState } from "react";
import { addLetter } from "../../utils/apiHelper";
import "../styles/Forms.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minHeight: "500px",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddLetterForm({ open, onClose, setLetters, setOpen }) {
  const [errors, setErrors] = useState({});
  const [letter, setLetter] = useState({
    sender: "",
    recipient: "",
    message: "",
  });

  const addNewLetter = (e) => {
    e.preventDefault();
    addLetter(letter, setLetters, setOpen, setErrors);
  };

  const onLetterChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div onClick={() => setOpen(false)} className="close-modal">
            <Icon>clear</Icon>
          </div>

          <form onSubmit={addNewLetter} className="letter_form">
            <h1>Write Your Letter</h1>
            <div>
              <InputField
                type="text"
                name="sender"
                onChange={onLetterChange}
                label="Enter your name if you don't want to be anonymous."
              />

              <InputField
                type="text"
                name="recipient"
                errorMessage={errors.recipient}
                onChange={onLetterChange}
                label="Recipient"
              />
              <TextAreaField
                name="message"
                onChange={onLetterChange}
                label="Message"
                errorMessage={errors.message}
              />
            </div>

            <SendBtn text="Send Letter" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddLetterForm;
