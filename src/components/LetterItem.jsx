import "./styles/Letters.css";

function LetterItem({ sender, recipient, created_at, onClick }) {
  return (
    <div className="letter_item">
      <div className="letter_header">
        {sender ? (
          <>
            <p>From: {sender}</p>
          </>
        ) : (
          <p></p>
        )}

        <p> {created_at}</p>
      </div>

      <div className="letter_recipient">
        <p>Letter to {recipient}. I hope you read this.</p>
      </div>

      <div className="letter_opener">
        <button onClick={onClick}>View Letter</button>
      </div>
    </div>
  );
}

export default LetterItem;
