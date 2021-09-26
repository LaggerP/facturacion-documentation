// Example body request structure for new subscription registration

let payload = {
   "userObjectId": "string", //objectId from SSO
   "firstName": "string",
   "lastName": "string",
   "email": "string",
   "telephone": "string",
   "subscriptionId": "string",
   "packageData": [
       {
           "id": 1,
           "name": "string",
           "price": 200
       },
       {
           "id": 2,
           "name": "string",
           "price": 200
       }
   ]
}