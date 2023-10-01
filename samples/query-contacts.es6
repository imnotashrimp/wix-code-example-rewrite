import { contacts } from 'wix-crm-backend';

export function myQueryContactsFunction() {

  return contacts.queryContacts()
    .eq("info.addresses.country", "GB")
    .find()
    .then((results) => {
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
        // Handle case where no matching items found
      }
    })
    .catch((error) => {
      console.error(error);
    })

}