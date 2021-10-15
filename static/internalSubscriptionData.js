// Example body request structure for new subscription registration

let payload = {
    "userId": 1,
    "email":"string", //User Email
    "name": "string", //Package name
    "subscriptionId": 1, //id obtenido del context de React (una subscriptionId tiene varios paquetes asociados)
    "packageId": 4, //este valor puede variar
    "cost": 300,
    "firstName":"string",
    "lastName":"string",
    "telephone":"string",
    "uriImg": "string" //Package img Uri
}
