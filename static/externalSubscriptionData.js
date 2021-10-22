// Example body request structure for new subscription registration.
// ALL VALUES CANNOT BE NULL

let payload = {
   "userObjectId": "string", //objectId from SSO
   "firstName": "string", 
   "lastName": "string",
   "email": "string",
   "telephone": "string",
   "subscriptionId": "string",
   "packageData": [
       {
           "id": 1, //Package id from subscription BD
           "name": "string", //Package name from subscription BD
           "price": 200,
           "uriImg": "string" //Image Uri from subscription BD
       },
       {
           "id": 2,
           "name": "string",
           "price": 200,
           "uriImg": "string"
       }
   ]
}