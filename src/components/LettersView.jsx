import { useState } from "react";
import LetterItem from "./LetterItem";
import SendBtn from "./SendBtn";
import "./styles/MainContent.css";
import ViewLetterModal from "./ViewLetterModal";
import AddLetterForm from "./forms/AddLetterForm";
import { getLetterById } from "../utils/apiHelper";
import FilterLetter from "./FilterLetter";

function LettersView({ letters, setLetters }) {
  const [letter, setLetter] = useState({});
  const [viewLetterModal, setViewLetterModal] = useState(false);
  const [openAddLetterModal, setOpenAddLetterModal] = useState(false);

  const closeViewLetterModal = () => {
    setViewLetterModal(false);
  };

  const closeAddLetterModal = () => {
    setOpenAddLetterModal(false);
  };

  const viewAddLetterModal = () => setOpenAddLetterModal(true);

  const onViewLetterClick = (id) => {
    // GET letter by letter.id
    getLetterById(id, setLetter);
    setViewLetterModal(true);
  };

  return (
    <div>
      <div className="title">
        <h1>Letters</h1>
        <SendBtn onClick={viewAddLetterModal} text="Create Letter" />
      </div>
      <FilterLetter setLetters={setLetters} />
      <div className="letters_view">
        <div className="letters_list">
          {letters.map((letter) => (
            <LetterItem
              key={letter.id}
              sender={letter?.sender}
              recipient={letter.recipient}
              created_at={letter.created_at}
              onClick={() => onViewLetterClick(letter.id)}
            />
          ))}
        </div>
      </div>

      <ViewLetterModal
        open={viewLetterModal}
        setOpen={setViewLetterModal}
        onClose={closeViewLetterModal}
        letter={letter}
      />

      <AddLetterForm
        open={openAddLetterModal}
        setOpen={setOpenAddLetterModal}
        onClose={closeAddLetterModal}
        setLetters={setLetters}
      />
    </div>
  );
}

export default LettersView;
