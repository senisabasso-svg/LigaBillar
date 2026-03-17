# 🚀 Guía de Despliegue en Render

## Configuración para Render.com

### Opción 1: Usando Docker (Recomendado si Render lo requiere)

Si Render te está pidiendo configuración de Docker, usa esta opción:

**Tipo de Servicio:** Web Service (Docker)

**Configuración Docker:**
- **Dockerfile Path:** `liga-saltena-billar/Dockerfile` (o `Dockerfile` si está en la raíz)
- **Docker Build Context Directory:** `liga-saltena-billar` (o dejar vacío si está en la raíz)
- **Docker Command:** (dejar vacío - usa el CMD del Dockerfile)

**Variables de Entorno:**
- `PORT`: `3000` (Render lo asigna automáticamente)

**Repositorio:**
- **Repositorio:** Tu URL de GitHub
- **Rama:** `main`
- **Root Directory:** `liga-saltena-billar` (si aplica)

---

### Opción 2: Configuración Manual en Render Dashboard (Sin Docker)

#### Datos para configurar en Render:

**Tipo de Servicio:** Web Service

**Configuración Básica:**
- **Nombre:** `liga-saltena-billar` (o el que prefieras)
- **Entorno:** `Node`
- **Plan:** `Free` (o el plan que prefieras)

**Build & Deploy:**
- **Build Command:** 
  ```bash
  npm install && npm run build
  ```
- **Start Command:**
  ```bash
  npm start
  ```
  O alternativamente:
  ```bash
  npm run preview -- --host --port $PORT
  ```

**Variables de Entorno:**
- `NODE_VERSION`: `18.17.0` (o superior)

**Repositorio:**
- **Repositorio:** Tu URL de GitHub (ej: `https://github.com/tu-usuario/LigaBillar`)
- **Rama:** `main` (o la rama que uses)
- **Directorio Raíz:** `liga-saltena-billar` (si el proyecto está dentro de una subcarpeta)

**Auto-Deploy:**
- ✅ Activar "Auto-Deploy" para que se despliegue automáticamente con cada push

---

### Opción 2: Usando render.yaml (Recomendado)

Si tu proyecto está en la raíz del repositorio, Render detectará automáticamente el archivo `render.yaml` y usará esa configuración.

**Pasos:**
1. Asegúrate de que el archivo `render.yaml` esté en la raíz del repositorio
2. En Render, selecciona "New" → "Blueprint"
3. Conecta tu repositorio
4. Render detectará automáticamente el `render.yaml`

---

## 📋 Resumen de Configuración

### Si el proyecto está en la raíz del repo:
```
Build Command: npm install && npm run build
Start Command: npm start
Root Directory: (dejar vacío)
```

### Si el proyecto está en una subcarpeta (liga-saltena-billar):
```
Build Command: cd liga-saltena-billar && npm install && npm run build
Start Command: cd liga-saltena-billar && npm start
Root Directory: liga-saltena-billar
```

---

## 🔧 Comandos de Build y Start

### Build Command:
```bash
npm install && npm run build
```

Este comando:
1. Instala todas las dependencias
2. Compila el proyecto React con Vite
3. Genera los archivos estáticos en la carpeta `dist/`

### Start Command:
```bash
npm start
```

Este comando inicia el servidor de preview de Vite que sirve los archivos estáticos.

---

## ⚙️ Variables de Entorno

Render automáticamente proporciona:
- `PORT`: Puerto donde Render espera que el servicio escuche
- `NODE_ENV`: `production`

Puedes agregar variables personalizadas si las necesitas más adelante.

---

## 📝 Notas Importantes

1. **Puerto:** El script `start` usa `$PORT` que Render proporciona automáticamente
2. **Node Version:** Se recomienda Node 18.17.0 o superior
3. **Build Output:** Los archivos compilados se generan en `dist/`
4. **HTTPS:** Render proporciona HTTPS automáticamente
5. **Dominio:** Render asigna un dominio gratuito tipo `tu-app.onrender.com`

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
- Asegúrate de que el `Root Directory` esté configurado correctamente si el proyecto está en una subcarpeta

### Error: "Port already in use"
- Asegúrate de usar `$PORT` en el start command, no un puerto fijo

### Build falla
- Verifica que todas las dependencias estén en `dependencies` y no solo en `devDependencies`
- Revisa los logs de build en Render para ver el error específico

### El sitio no carga
- Verifica que el `Start Command` esté correcto
- Revisa los logs en tiempo real en el dashboard de Render

---

## ✅ Checklist Pre-Deploy

- [ ] El proyecto compila localmente con `npm run build`
- [ ] El preview funciona localmente con `npm run preview`
- [ ] Todos los archivos están commiteados y pusheados a GitHub
- [ ] El repositorio está conectado en Render
- [ ] Las variables de entorno están configuradas
- [ ] El Root Directory está configurado si es necesario

---

## 🎉 Después del Deploy

Una vez desplegado, Render te dará una URL tipo:
```
https://liga-saltena-billar.onrender.com
```

Puedes configurar un dominio personalizado desde el dashboard de Render en la sección "Custom Domains".
