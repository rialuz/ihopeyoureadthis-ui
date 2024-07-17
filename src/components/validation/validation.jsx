export const validateFields = (letter) => {
  const errors = {};

  if (!letter.recipient) errors.recipient = "Please indicate your recipient.";
  if (!letter.message) errors.message = "Please write a message.";

  return errors;
};
