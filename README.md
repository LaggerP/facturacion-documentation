---
label: Inicio
icon: home
---
# Facturación y Autogestión

**Facturación y Autogestión** entra en acción una vez que un usuario decide suscribirse a uno o varios paquetes. 

A continuación se deja un diagrama de secuencia para entender el proceso de generación de futuras facturaciones.

```mermaid
sequenceDiagram
    participant A as Aplicación
    participant S as Suscripción
    participant F as Facturación y Autogestión
    A->>S: ¡Hola! me quiero suscribir a estos paquetes
    S->>F: Che, quiero que me factures mes a mes estos paquetes a 'x' usuario
```

Una vez generada la carga de facturación mensual (registro del usuario en nuestro sistema), nuestro módulo permitirá:

- **Realizar pagos mensuales.**
!!!success Pago aceptado
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡Se realizó el pago de esta suscripción! Te actualizo los datos.
```
!!!

!!!danger Pago rechazado 
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡No se pudo realizar el pago de esta suscripción! Te actualizo los datos.
```
!!!

- **Suscribirse a nuevos paquetes.**
!!!light Nueva suscripción
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡El usuario se suscribió a un nuevo paquete! Te actualizo los datos.
```
!!!

- **Darse de baja de paquetes.**
!!!light Baja
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡El usuario se dió de baja en uno/s de sus paquetes! Te actualizo los datos.
```
!!!

- **Modificar una suscripción.**
!!!light Modificación
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡El usuario modificó uno/s de sus paquetes! Te actualizo los datos.
```
!!!