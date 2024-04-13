require("dotenv").config();
const webexFramework = require("webex-node-bot-framework");
const webexWebhook = require("webex-node-bot-framework/webhook");
const express = require("express");
const bodyParser = require("body-parser");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GEMINI_API_KEY;

const app = express();
app.use(bodyParser.json());

// webex bot config
const webexBotConfig = {
  webhookUrl: process.env.WEBHOOK_URL,
  token: process.env.WEBEX_BOT_ACCESS_TOKEN,
  port: process.env.PORT || 3000,
};

// init webex framework
var framework = new webexFramework(webexBotConfig);
framework.start();
console.log("Starting framework, please wait...");

framework.on("initialized", () => {
  console.log("framework is all fired up! [Press CTRL-C to quit]");
});

framework.on("spawn", (bot, id, actorId) => {
  if (!actorId) {
    // don't say anything here or your bot's spaces will get
    // spammed every time your server is restarted
    console.log(
      `While starting up, the framework found our bot in a space called: ${bot.room.title}`
    );
  } else {
    // When actorId is present it means someone added your bot got added to a new space
    // Lets find out more about them..
    var msg =
      "You can say `help` to get the list of words I am able to respond to.";
    bot.webex.people
      .get(actorId)
      .then((user) => {
        msg = `Hello there ${user.displayName}. ${msg}`;
      })
      .catch((e) => {
        console.error(
          `Failed to lookup user details in framwork.on("spawn"): ${e.message}`
        );
        msg = `Hello there. ${msg}`;
      })
      .finally(() => {
        // Say hello, and tell users what you do!
        if (bot.isDirect) {
          bot.say("markdown", msg);
        } else {
          let botName = bot.person.displayName;
          msg += `\n\nDon't forget, in order for me to see your messages in this group space, be sure to *@mention* ${botName}.`;
          bot.say("markdown", msg);
        }
      });
  }
});

framework.on("log", (msg) => {
  console.log(msg);
});

framework.hears(
  /help|what can i (do|say)|what (can|do) you do/i,
  (bot, trigger) => {
    console.log(`someone needs help! They asked ${trigger.text}`);
    bot
      .say(`Hello ${trigger.person.displayName}.`)
      //    .then(() => sendHelp(bot))
      .then(() => bot.say("markdown", framework.showHelp()))
      .catch((e) => console.error(`Problem in help hander: ${e.message}`));
  },
  "**help**: (what you are reading now)",
  0
);

framework.hears(
  "info",
  (bot, trigger) => {
    console.log("info command received");
    //the "trigger" parameter gives you access to data about the user who entered the command
    let personAvatar = trigger.person.avatar;
    let personEmail = trigger.person.emails[0];
    let personDisplayName = trigger.person.displayName;
    let outputString = `Here is your personal information: \n\n\n **Name:** ${personDisplayName}  \n\n\n **Email:** ${personEmail} \n\n\n **Avatar URL:** ${personAvatar}`;
    bot.say("markdown", outputString);
  },
  "**info**: (get your personal details)",
  0
);

framework.hears(
  "space",
  (bot) => {
    console.log("space. the final frontier");
    let roomTitle = bot.room.title;
    let spaceID = bot.room.id;
    let roomType = bot.room.type;

    let outputString = `The title of this space: ${roomTitle} \n\n The roomID of this space: ${spaceID} \n\n The type of this space: ${roomType}`;

    console.log(outputString);
    bot
      .say("markdown", outputString)
      .catch((e) => console.error(`bot.say failed: ${e.message}`));
  },
  "**space**: (get details about this space) ",
  0
);

framework.hears(
  /.*/,
  async (bot, trigger) => {
    // This will fire for any input so only respond if we haven't already
    console.log(`catch-all handler fired for user input: ${trigger.text}`);

    if (trigger.type === "message") {
      // try to send to gemini
      const text = await answerQuestion(trigger.text);
      bot.say(text).catch((e) => console.error(`bot.say failed: ${e.message}`));
    } else {
      bot
        .say(`Sorry, I don't know how to respond to "${trigger.text}"`)
        .then(() => bot.say("markdown", framework.showHelp()))
        //    .then(() => sendHelp(bot))
        .catch((e) =>
          console.error(
            `Problem in the unexepected command hander: ${e.message}`
          )
        );
    }
  },
  99999
);

async function answerQuestion(message) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
  });

  /** @type {import('@google/generative-ai').GenerationConfig} */
  const generationConfig = {
    temperature: 0.2,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "You are a chatbot in a company chat. Answer questions in a professional manner as a support agent and help the users to get the answers they seek.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "**User 1:** Hi there, I'm having trouble connecting to the company VPN. Can you help?\n\n**Chatbot:** Hello, thank you for reaching out. To troubleshoot the VPN connection issue, please follow these steps:\n1. Ensure you have a stable internet connection.\n2. Verify that your VPN software is up to date.\n3. Check if you have the correct login credentials.\n4. Reset your VPN connection settings.\n\nIf the issue persists, please contact the IT support team at extension [phone number] for further assistance.\n\n**User 2:** I'm trying to access a file on the company intranet, but I'm getting a 404 error.\n\n**Chatbot:** I apologize for the inconvenience. 404 error indicates that the requested file cannot be found on the server. Please double-check the URL you entered and ensure that the file still exists in the intranet. If you continue to face the issue, please contact the IT support team for additional assistance.\n\n**User 3:** I need to request a new company laptop. Who should I contact?\n\n**Chatbot:** To request a new company laptop, please submit your request via the IT Service Request Portal. You can access the portal through the company intranet. Once submitted, your request will be processed within [processing time].\n\n**User 4:** I'm having issues with my company email account. It's not sending or receiving messages.\n\n**Chatbot:** Thank you for reporting the issue. Please follow these troubleshooting steps:\n1. Check your internet connection.\n2. Verify that your email client settings are correct.\n3. Clear the email cache and cookies.\n4. Restart your computer.\n\nIf the issue persists, please contact the IT support team at extension [phone number] for further assistance.\n\n**User 5:** I want to report a security incident that I witnessed.\n\n**Chatbot:** Thank you for your vigilance. Please report the incident immediately to the IT security team at [email protected] or by calling the security hotline at [phone number]. They will prioritize your report and take appropriate action.",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(message);
  const response = result.response;
  return response.text();
}

//Server config & housekeeping
// Health Check
app.get("/", (req, res) => {
  res.send(`I'm alive.`);
});

app.post("/", webexWebhook(framework));

const server = app.listen(webexBotConfig.port, () => {
  framework.debug("framework listening on port %s", webexBotConfig.port);
});

// gracefully shutdown (ctrl-c)
process.on("SIGINT", () => {
  framework.debug("stopping...");
  server.close();
  framework.stop().then(() => {
    process.exit();
  });
});
