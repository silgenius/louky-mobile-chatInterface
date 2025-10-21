export const selectMessagesForConversations = (state, conversationId) => {
    const messages = state.messages.byId;
    const messageIds = state.conversations.byId[conversationId].messageIds;
    const newMessages = messageIds
      .map((id) => messages[id])
      .filter((message) => message.conversationId === conversationId);
    // console.log(newMessages);
    return newMessages;
  };
  