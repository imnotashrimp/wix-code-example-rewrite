import {mediaManager} from 'wix-media-backend';

const fileUrls = ['https://static.wixstatic.com/media/4c47c6_49b0e6d2c19b4564a191f88f6748bbb3~mv2.png'];

export function myDownloadFilesFunction(fileUrls) {
  return mediaManager.downloadFiles(fileUrls)
  .then((downloadUrl) => {
    return downloadUrl;
  })
  .catch((error) => {
    console.error(error);
  })
}

/* Promise resolves to a URL similar to:
 * "https://archive.wixmp.com/archive/wix/4c492536c61a495ca4b4526d71439a64"
 */