// Example body request structure for new subscription registration
// ALL VALUES CANNOT BE NULL
let payload = {
    userId: 1,
    name: "string", //Package name
    subscriptionId: 1, //id obtenido del context de React (una subscriptionId tiene varios paquetes asociados)
    packageId: 1, //este valor puede variar
    cost: 300,
    email: "string", //User Email
    uriImg: packageImage //Package img Uri
}