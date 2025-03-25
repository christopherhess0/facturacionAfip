# Sistema de Facturación AFIP 📊

Mi primer proyecto fullstack como estudiante. Un sistema de gestión y facturación para administradores de consorcios.

## 🚀 Características

- Gestión de edificios y consorcios
- Importación de datos desde Google Sheets
- Sistema de facturación integrado con AFIP
- Interfaz moderna y fácil de usar
- Base de datos MongoDB para almacenamiento persistente

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- MongoDB (v4.4 o superior)
- Cuenta de Google Cloud Platform (para importación desde Sheets)
- Cuenta de AFIP (para facturación)

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/christopherhess0/facturacionAfip.git
   cd facturacionAfip
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crear archivo `.env` en la raíz del proyecto:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/facturacion
   REACT_APP_API_URL=http://localhost:3001
   GOOGLE_SHEET_ID=tu_id_de_google_sheets
   ```

4. **Configurar credenciales de Google**
   - Crear archivo `src/server/credentials.json` con las credenciales de Google Cloud
   - Este archivo se obtiene de la consola de Google Cloud Platform

5. **Configurar MongoDB**
   - Asegurarse que MongoDB esté instalado y corriendo en `localhost:27017`
   - Los datos se restaurarán automáticamente desde la carpeta de backups

6. **Iniciar el proyecto**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

## 💾 Respaldo de Datos

- Los backups se almacenan en `src/server/backups/`
- Para restaurar datos en una nueva instalación:
  1. Copiar los archivos de backup a la carpeta `src/server/backups/`
  2. Los datos se restaurarán automáticamente al iniciar el servidor

## 🔒 Archivos Sensibles

Los siguientes archivos no están incluidos en el repositorio por seguridad:
- `.env`
- `src/server/credentials.json`
- Archivos de backup

Debes configurarlos manualmente en cada nueva instalación.

## 🛠️ Tecnologías Utilizadas

- Frontend: React, Material-UI, Redux
- Backend: Node.js, Express
- Base de datos: MongoDB
- APIs: Google Sheets, AFIP

## 📈 Mejoras Planificadas

- [ ] Sistema de autenticación mejorado
- [ ] Más opciones de personalización de facturas
- [ ] Reportes y estadísticas avanzadas
- [ ] Interfaz móvil optimizada

## 📞 Contacto

- LinkedIn: [Christopher Hess](https://www.linkedin.com/in/christopher-hess-818738209/)
- Email: [Próximamente]

## 🤝 Contribuciones

Este es un proyecto personal de aprendizaje, pero las sugerencias son bienvenidas. Siéntete libre de:
1. Hacer fork del proyecto
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Hacer push a la rama
5. Abrir un Pull Request

---
⭐️ ¡Si te gustó el proyecto, no dudes en darle una estrella!
