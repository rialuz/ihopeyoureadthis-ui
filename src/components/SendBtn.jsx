import "./styles/MainContent.css";

function SendBtn({ text, onClick }) {
  return (
    <div className="send_btn_container">
      <button onClick={onClick} className="send_btn">
        {text}
      </button>
    </div>
  );
}

export default SendBtn;
