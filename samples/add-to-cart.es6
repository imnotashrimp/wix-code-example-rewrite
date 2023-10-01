/**************************************
 * Backend code - my-backend-file.jsw *
 *************************************/

import { cart } from 'wix-ecom-backend';

export async function myAddToCartFunction(_id, options) {
  try {
    const updatedCart = await cart.addToCart(_id, options);
    console.log('Success! Updated cart:', updatedCart);
    return updatedCart;
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}

/*************
 * Page code *
 ************/

import { myAddToCartFunction } from 'backend/my-backend-file';

// Sample addToCart function parameters:
const cartId = '96a61a4b-6b61-47d1-a039-0213a8230ccd';
const options = {
  "lineItems": [{
    "catalogReference": {
      // Wix Stores appId
      "appId": "1380b703-ce81-ff05-f115-39571d94dfcd",
      // Wix Stores productId
      "catalogItemId": "c8539b66-7a44-fe18-affc-afec4be8562a"
    },
    "quantity": 1
  }]
};

myAddToCartFunction(cartId, options)
  .then((updatedCart) => {
    const cartSubtotal = updatedCart.subtotal.amount;
    const cartCheckoutId = updatedCart.checkoutId;
    const numberOfCartItems = updatedCart.lineItems.length;

    console.log('Success! Updated cart:', updatedCart);
    return updatedCart;
  })
  .catch((error) => {
    console.error(error);
    // Handle the error
  });

/* Promise resolves to:
 *
 * {
 *   "_id": "ba47a627-7bb8-4918-89b2-6a72af464765",
 *   "lineItems": [
 *     {
 *       "_id": "00000000-0000-0000-0000-000000000001",
 *       "quantity": 1,
 *       "catalogReference": {
 *         "catalogItemId": "c8539b66-7a44-fe18-affc-afec4be8562a",
 *         "appId": "1380b703-ce81-ff05-f115-39571d94dfcd"
 *       },
 *       "productName": {
 *         "original": "Shirt",
 *         "translated": "Shirt"
 *       },
 *       "url": "https://example.wixsite.com",
 *       "price": {
 *         "amount": "10",
 *         "convertedAmount": "10",
 *         "formattedAmount": "€10.00",
 *         "formattedConvertedAmount": "€10.00"
 *       },
 *       "fullPrice": {
 *         "amount": "10",
 *         "convertedAmount": "10",
 *         "formattedAmount": "€10.00",
 *         "formattedConvertedAmount": "€10.00"
 *       },
 *       "priceBeforeDiscounts": {
 *         "amount": "10",
 *         "convertedAmount": "10",
 *         "formattedAmount": "€10.00",
 *         "formattedConvertedAmount": "€10.00"
 *       },
 *       "descriptionLines": [],
 *       "image": "wix:image://v1/3c76e2_c5331f937348492a97df87b0a3b34ea4~mv2.jpg#originWidth=1000&originHeight=1000",
 *       "availability": {
 *         "status": "AVAILABLE"
 *       },
 *       "physicalProperties": {
 *         "sku": "364115376135191",
 *         "shippable": true
 *       },
 *       "couponScopes": [
 *         {
 *           "namespace": "stores",
 *           "group": {
 *             "name": "collection",
 *             "entityId": "00000000-000000-000000-000000000001"
 *           }
 *         },
 *         {
 *           "namespace": "stores",
 *           "group": {
 *             "name": "product",
 *             "entityId": "c8539b66-7a44-fe18-affc-afec4be8562a"
 *           }
 *         }
 *       ],
 *       "itemType": {
 *         "preset": "PHYSICAL"
 *       },
 *       "paymentOption": "FULL_PAYMENT_ONLINE"
 *     }
 *   ],
 *   "buyerInfo": {
 *     "visitorId": "4c7ce95c-9fb3-417d-9f02-b41e82b841f7"
 *   },
 *   "currency": "EUR",
 *   "conversionCurrency": "EUR",
 *   "buyerLanguage": "en",
 *   "siteLanguage": "en",
 *   "taxIncludedInPrices": false,
 *   "weightUnit": "KG",
 *   "subtotal": {
 *     "amount": "10",
 *     "convertedAmount": "10",
 *     "formattedAmount": "€10.00",
 *     "formattedConvertedAmount": "€10.00"
 *   },
 *   "appliedDiscounts": [],
 *   "inSync": true,
 *   "_createdDate": "2022-05-15T11:31:30.484Z",
 *   "_updatedDate": "2022-05-23T12:11:55.095Z"
 * }
 *
 */
