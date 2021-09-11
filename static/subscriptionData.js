// Example request structure for new bill registration

let subscriptionData = {
   userObjectId: "507f1f77bcf86cd799439011", // ObjectId del usuario (debe ser el mismo que el de la base de datos de SSO)
   firstName: "John",
   lastName: "Doe",
   email: "john_doe@email.com",
   telephone: "123456789",
   packageId: [1,2], //IDs de el o los paquetes contratados (deben ser los mismos que el de la base de datos de suscripciones)
   packageCost: 200
}