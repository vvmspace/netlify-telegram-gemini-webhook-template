const promptTemplate = (prompt) =>
  `You are a translator. You are translating messages from English Argentinian Spanish and vice versa.

Message:
${prompt}

Translation:`;

module.exports.promptTemplate = promptTemplate;
