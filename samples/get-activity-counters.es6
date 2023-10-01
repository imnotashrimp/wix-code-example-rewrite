import { activityCounters } from 'wix-activity-counters.v2';
  
 async function getActivityCounters(memberId) {
   try {
     const result = await activityCounters.getActivityCounters(memberId);

     return result;
   } catch (error) {
     console.error(error);
     // Handle the error
   }
 }
  