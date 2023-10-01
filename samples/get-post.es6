import { posts } from 'wix-blog-backend';

/* Sample postId value:
 * 'ccbb6257-ed0e-4521-97df-8b5b207adb00'
 */

export async function getPostFunction(postId) {
  try {
    const result = await posts.getPost(postId);
    const title = result.post.title;
    const excerpt = result.post.excerpt;
    console.log('Retrieved Result:', result);
    return result;
  } catch (error) {
    console.error(error);
  };
}


/* Promise resolves to:
 * { 
 *   "post": { 
 *     "_id": "ccbb6257-ed0e-4521-97df-8b5b207adb00",  
 *     "categoryIds": [  
 *       "1ea22fce-bc3c-4b78-9422-f0f367f8628e"  
 *     ],  
 *     "commentingEnabled": true,  
 *     "excerpt": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",  
 *     "featured": true, 
 *     "firstPublishedDate": "2020-08-05T21:00:00.000Z", 
 *     "hashtags": [ 
 *       "sea",  
 *       "sun" 
 *     ],  
 *     "heroImage": ""
 *     "language": "en", 
 *     "lastPublishedDate": "2020-08-05T21:00:00.000Z",  
 *     "media": {
 *       "wixMedia": {
 *         "image": "wix:image://v1/75059a_9f8cd2f1282c4dc7ae9a4bea155e2661~mv2.jpg#originWidth=602&originHeight=773"
 *       },
 *       "displayed": true,
 *       "custom": false
 *     },
 *     "memberId": "4b9f4b64-0792-481e-9289-b2550c1bb7ea", 
 *     "minutesToRead": 1, 
 *     "moderationDetails": {},
 *     "pinned": false,  
 *     "pricingPlanIds": [ 
 *       "b6e94a0c-4d0f-435e-9602-0dd61d2aca37"  
 *     ],  
 *     "relatedPostIds": [ 
 *       "425a5dca-c32d-40e6-b2d7-a8ffa3addded"  
 *     ],  
 *     "slug": "my-vacation",  
 *     "tagIds": [ 
 *       "b698f939-cab5-419b-9966-ba0fa3316de9"  
 *     ],  
 *     "title": "My vacation", 
 *     "translationId": "3cd710b7-c28d-4547-9b8a-3c1ec776064b",  
 *     "contentId": "62a9b7a4f276b0918225d8ef"
 *   } 
 * }
 */