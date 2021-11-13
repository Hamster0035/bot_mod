modules.exports.config = {
    name: "menu lệnh",
    version: "0.0.1",
    hasPermssion: "0",
    credits: "Hamster",
    description: "menu lệnh mod",
    commandCategory: "Menu All lệnh",
    usages: "[lệnh]",
    cooldowns: "3",
};
module.exports.hanleEvent = function ({api event}) { const { commands } = global.client;
       
    if (!event.body) return;
   
    const { threadID, messageID, body } = event;
   
    if (body.indexOf("help") != 0) return;
   
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
   
   
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
   
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
   
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
   
    return api.sendMessage(`🐹 ${command.config.name} 🐹\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
   };
   
   module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
   const { commands } = global.client;
   const { threadID, messageID } = event;
   const command = commands.get((args[0] || "").toLowerCase());
   const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
   if (!command) {
   const command = commands.values();
   var tl = ["Hi mị là Hamster","hãy thể hiện mình là 1 có ý thức khi dùng bot","không spam không toxic với Bot ","Liên hệ admin qua https://www.facebook.com/hemsterNguNgok nếu bạn có thắc mắc nhá","Yêu mọi người ❤️"];
   var tle = tl[Math.floor(Math.random() * tl.length)];
   var lon = `[Bạn có biết?]: ${tle}.`;
   return api.sendMessage(lon, event.threadID, event.messageID);
   }
