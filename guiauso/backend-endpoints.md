---
label: Endpoints
icon: gear
---

### Enpoints del módulo de facturación y autogestión


==- [!badge size="xl" variant="primary " text="GET"]  Obtener facturas

||| Módulo implicado
Facturación y Autogestión (F&A)
||| Descripción
Se buscan todas las facturas pertenecientes a un usuario.
|||


[!badge size="xl" variant="primary " text="GET"] [!badge corners="pill" size="l" variant="dark" text="/bills/"]


```mermaid
sequenceDiagram
    F&A->>BD: GET all bills
    alt Correct GET
        BD->>F&A: {code: 200, data: {...}}
    else Bad GET
         BD->>F&A: {code: 500, data: "ERROR-001", message: "Error"}
    end
```
===

==- [!badge size="xl" variant="primary " text="GET"]  Obtener facturas por id

||| Módulo implicado
Facturación y Autogestión (F&A)
||| Descripción
Se buscan todas las facturas pertenecientes a un usuario por **:billId**
|||


[!badge size="xl" variant="primary " text="GET"] [!badge corners="pill" size="l" variant="dark" text="/bills/:billId"]


```mermaid
sequenceDiagram
    F&A->>BD: GET by :billId
    alt Correct GET
        BD->>F&A: {code: 200, data: {...}}
    else Bad GET
         BD->>F&A: {code: 500, data: "ERROR-001", message: "Error"}
    end
```
===
