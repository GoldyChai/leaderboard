const schedule = require('node-schedule');
const {Messages} = require('./schema.js');

const dailyReset = schedule.scheduleJob('0 0 0 * * *',async (firedTime) => {

    await Messages.updateMany(
         { },
         {'dailyMsg':0}
      )
    
});
module.exports.dailyReset = dailyReset

const monthlyReset = schedule.scheduleJob('0 0 0 0 * *',async (firedTime) => {

    await Messages.updateMany(
         { },
         {'monthlyMsg':0}
      )
    
});
module.exports.monthlyReset = monthlyReset

const Reset = schedule.scheduleJob({hour:14,minute:30,dayOfWeek:0},async (firedTime) => {

    await Messages.updateMany(
         { },
         {'messages':0}
      )
    
});
module.exports.Reset = Reset