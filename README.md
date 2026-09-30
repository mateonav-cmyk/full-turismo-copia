# VuelaYa - Portal de Paquetes Turísticos (Estilo Despegar)

Aplicación web completa, modular y moderna para una agencia de viajes con estética visual inspirada en Despegar:
- **Color Primario:** Púrpura Despegar (`#7f00ff`)
- **Fondos:** Blancos limpios de alto contraste con tarjetas elevadas
- **Iconografía:** Lucide React
- **Arquitectura:** Cliente/Servidor desacoplada con simulación de Base de Datos Relacional y persistencia en LocalStorage reactivo.

---

## 🚀 Puesta en Marcha

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Accede en el navegador a: `http://localhost:3000`

3. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 👥 Credenciales de Acceso y Roles Predefinidos

La aplicación cuenta con un **Demo Switcher** en la barra superior para alternar entre roles con un solo clic, o bien utilizar el formulario de Login tradicional:

| Rol | Usuario / Email | Contraseña | Descripción |
| :--- | :--- | :--- | :--- |
| **Cliente / Pasajero** | `cliente@test.com` | `123` | Permite explorar paquetes, armar carritos, pagar con pasarela simulada, consultar pedidos pendientes, modificarlos o anularlos, y ver vouchers. |
| **Jefe de Ventas** | `admin@test.com` | `123` | Acceso al panel administrativo: gestión de catálogo (alta/edición/baja de productos), entrega de pedidos (con transición automática al histórico y facturación), estado de cuenta y auditoría de emails. |

---

## 🏗️ Arquitectura del Sistema

### 1. Capa Servidor & Base de Datos Relacional (`src/services/`)
- `db.ts`: Simula las tablas de la base de datos relacional:
  - **`users`**: Clientes y administradores registrados.
  - **`products`**: Paquetes turísticos (Córdoba, Iguazú, Bariloche, Mendoza, Salta, Ushuaia, Cancún, Río de Janeiro).
  - **`pending_orders`**: Carritos y compras abonadas en estado *Pendiente de Entrega*.
  - **`historical_sales`**: Pedidos entregados por el Jefe de Ventas con número de factura oficial.
  - **`email_logs`**: Auditoría de correos electrónicos automáticos enviados tras cada compra o emisión.
- `api.ts`: Simula los endpoints y latencia del servidor backend, incluyendo la **lógica de transición**:
  - Al ejecutar `deliverOrder(orderId)`, el sistema elimina el pedido de la tabla `pending_orders`, asigna número de factura fiscal (`FC-A-2026-XXXX`), estampa la fecha de entrega y lo transfiere a la tabla `historical_sales`.
  - Generación de identificadores únicos por ítem de pedido (`ITEM-XXXX`).
  - Emisión de notificaciones y correos automáticos al cliente y a `ventas@vuelaya.com`.

### 2. Capa Cliente (Pasajero)
- **Hero Banner:** Buscador interactivo por Origen (ej. Caleta Olivia), Destino, Fechas y Pasajeros.
- **Carrusel de Ofertas:** Deslizamiento de paquetes con descuentos destacados y conteo de cupos.
- **Catálogo de Productos:** Filtros por categoría (Nacional, Internacional, Escapadas, Aventura), búsqueda por texto, orden por precio y duración.
- **Carrito de Compras:** Selección de pasajeros, fechas, notas y cálculo de cuotas.
- **Pasarela de Pagos Simulada:** Formulario estilo MercadoPago con tarjeta de crédito/débito, validación, cuotas sin interés y spinner de procesamiento.
- **Mis Pedidos:**
  - Pestaña de pedidos pendientes con opciones de **Modificar** (pasajeros, fechas, notas) o **Anular**.
  - Pestaña de historial con **Voucher Oficial de Viaje** para imprimir.

### 3. Módulo Administrativo (Jefe de Ventas)
- **Métricas KPI:** Total Facturado Histórico, Pedidos Pendientes, Clientes y Catálogo.
- **Gestión de Pedidos:** Visualización de todos los pedidos pendientes de clientes con acciones para **Realizar la Entrega** (transición al histórico) o **Anular**.
- **Catálogo de Productos:** Formulario para agregar nuevos viajes con código, amenidades, precio, imágenes predefinidas y stock.
- **Estado de Cuenta / Facturación:** Listado de ventas y facturas ordenables dinámicamente por **Fecha** (más reciente/antigua) y por **Cliente** (A-Z / Z-A).
- **Registro de Correos:** Tabla de auditoría con visor interactivo del correo HTML simulado.
