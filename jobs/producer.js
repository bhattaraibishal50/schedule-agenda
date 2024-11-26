
const agenda  = require("./agenda");

const schedule = {
  onBoardingMailNow: async () => {
    await agenda.now("send-onboarding-mail");
  },
  dailyMail: async () => {
    await agenda.every("in 1 minute", "daily-mail");
  },

  weeklyMail: async data => {
    await agenda.schedule("0 0 * * MON", "weekly-mail", data);
  },
  stopMsg: async () => {
    await agenda.cancel({ name: "daily-mail" });
  },
};

module.exports = { schedule };
