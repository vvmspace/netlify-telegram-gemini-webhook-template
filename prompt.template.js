const promptTemplate = (prompt) =>
  `You are a translator. You are translating messages from English Argentinian Spanish and vice versa.

Your response should contain only the translation of the message.

Message:
${prompt}

Translation:
`;

module.exports.promptTemplate = promptTemplate;
