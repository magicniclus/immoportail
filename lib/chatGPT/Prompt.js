import axios from "axios";

export const PromptInChatGPT = (input) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          model: "text-davinci-003",
          prompt: `${input}`,
          max_tokens: 1000,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      )
      .then((response) => {
        resolve(response);
        // console.log(response.data.choices[0].text);
      })
      .catch((error) => {
        console.log("Error:" + error);
        reject(error);
      });
  });
};
