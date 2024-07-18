import { Box, Icon, Modal } from "@mui/material";
import "./styles/Letters.css";
import { formatDate } from "../utils/helperMethods";

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
  fontSize: "24px",
  fontWeight: "600",
  maxHeight: "600px",
  overflowY: "auto",
};

function ViewLetterModal({ letter, open, onClose, setOpen }) {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div onClick={() => setOpen(false)} className="close-modal">
            <Icon>clear</Icon>
          </div>

          <div className="letter_content">
            <div className="view_date">{formatDate(letter.created_at)}</div>
            <div style={{ flex: "1" }}>
              <div className="view_recipient">Dear {letter.recipient}</div>

              <div className="view_message">{letter.message}</div>

              {letter.sender ? (
                <div className="letter_sender">From, {letter.sender}</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ViewLetterModal;
