---
label: Inicio
icon: home
---
# Facturación y Autogestión

### Explicación inicial.

**Facturación y Autogestión** entra en acción una vez que un usuario se suscribe a uno o varios paquetes. 

A continuación se deja un diagrama de secuencia para entender el proceso de generación de futuras facturaciones.

```mermaid
sequenceDiagram
    participant A as Web/Mobile
    participant S as Suscripción
    participant F as Facturación y Autogestión
    A->>S: ¡Hola, soy X y me quiero suscribir a estos paquetes!
    S->>F: Che, quiero que le factures mes a mes estos paquetes al usuario 'X'
    F->>S: ¡Ok!, le cobro todos los meses esta suscripción mientras esté activa.
```

**Una vez generada la carga de facturación mensual (registro del usuario en nuestro sistema), nuestro módulo permitirá:**

### Realizar pagos mensuales.
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

### Suscribirse a nuevos paquetes.
!!!light Nueva suscripción
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡El usuario se suscribió a un nuevo paquete! Te actualizo los datos.
```
!!!

### Darse de baja de paquetes.
!!!light Baja
```mermaid
sequenceDiagram
    participant F as Facturación y Autogestión
    participant S as Suscripción
    F->>S: ¡El usuario se dió de baja en uno/s de sus paquetes! Te actualizo los datos.
```

!!!