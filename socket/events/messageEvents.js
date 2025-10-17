// import { createMessage, setTypingStatus, setSentMessage, setDeliveredMessage } from './';

const messageEvents = (dispatch) => [
  {
    signal: 'receive_message',
    action: (data) => dispatch(createMessage(data)),
  },
  {
    signal: 'is_typing',
    action: (data) => dispatch(setTypingStatus(data)),
  },
  {
    signal: 'stopped_typing',
    action: (data) => dispatch(unsetTypingStatus(data)),
  },
  {
    signal: 'sent_message',
    action: (data) => dispatch(setSentMessage(data)),
  },
  {
    signal: 'delivered_message',
    action: (data) => dispatch(setDeliveredMessage(data)),
  },
];

export default messageEvents;
