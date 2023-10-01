import { activityCounters } from 'wix-activity-counters.v2';

export async function myQueryFunction() {
  const results = await activityCounters
    .queryActivityCounters()
    .eq('_id', 'bb19b637-74ce-55d3-ae32-430b588051da')
    .find();

  if (results.items.length > 0) {
    const items = results.items;
    const firstItem = items[0];
    const pageSize = results.pageSize;
    const hasNext = results.hasNext();
    const hasPrev = results.hasPrev();
    const length = results.length;
    const query = results.query;

    return items;
  } else {
    // Handle if no matching items found
  }
}
