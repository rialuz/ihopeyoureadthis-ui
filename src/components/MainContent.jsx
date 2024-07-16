import ContentMessage from "./ContentMessage";
import LettersView from "./LettersView";

function MainContent({ letters, setLetters}) {

  return (
    <div className="main_content">
      <ContentMessage />
      <LettersView letters={letters} setLetters={setLetters} />
    </div>
  );
}

export default MainContent;
