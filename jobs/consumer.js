const agenda = require("./agenda");

agenda.define("send-onboarding-mail", async job => {
    console.log("Hello Welcome To readytowork Inc.");
});

agenda.define("daily-mail",{ priority: "high" }, async job => {
    console.log("Hello Daily Mail");
});

agenda.define("weekly-mail", async job => {
    const { data } = job.attrs;
    console.log("Hello Weekly Mail", data);
});


