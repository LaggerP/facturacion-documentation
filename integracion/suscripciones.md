---
label: Suscripciones - endpoints de integración
icon: gear
---

**Última actualización: 18/09/2021**
### Diagrama de secuencia


```mermaid
sequenceDiagram
    participant S as Suscripción
    participant F as Facturación y Autogestión
    S->>F: Nuevo registro de suscripción.
    F->>S: Nuevo registro suscripción a paquete.
    F->>S: Modificación de suscripción a paquete.
    F->>S: Cancelación suscripción a paquete.
    F->>S: Aviso de pago.

```
### Enpoints de integración

==- [!badge size="xl" variant="success" text="POST"]  Registrar suscripción y usuario en F&A

||| Del módulo
Suscripciones
||| Al módulo
Facturación y Autogestión (F&A)
||| Descripción
Nuevo registro de paquete(s) y usuario en el sistema de F&A
|||

[!badge size="l" variant="success" text="POST"] [!badge size="l" variant="secondary" text="https://notflix-fya-backend.herokuapp.com/api/subscriptions/external/new"]

:::code source="../static/externalSubscriptionData.js" :::

```mermaid
sequenceDiagram
    Suscripciones->>F&A: subscriptionData
    alt Correct register
        F&A->>Suscripciones: {code: 201, description: Correct register}
    else Bad register
        F&A->>Suscripciones: {code: 400, description: Bad register, user has already been subscribed.}
    end
    opt Server error
        F&A->>Suscripciones: {code: 500, description: Server error}
    end
```
===


