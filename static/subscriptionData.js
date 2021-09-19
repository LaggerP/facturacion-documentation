// Example request structure for new bill registration

let subscriptionData = {
   userObjectId: "507f1f77bcf86cd799439011", // ObjectId del usuario (debe ser el mismo que el de la base de datos de SSO).
   firstName: "John",
   lastName: "Doe",
   email: "john_doe@email.com",
   telephone: "123456789",
   suscriptionId: "123123", //ID de la suscripción. Proviene de la base de datos de Suscripciones. Necesario para hacer referencia a una suscripción la cual nos permitirá modificar, eliminar y dar aviso de pago.
   packageData: [
      {
         id: 1, //ID del paquete contratado (debe ser el mismo que el de la base de datos de suscripciones).
         price: 200
      },
      {
         id: 2,
         price: 200
      }
   ] 
}