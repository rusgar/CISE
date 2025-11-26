# 🎨 Portfolio Personal - Plantilla para Estudiantes

> Plantilla simple y moderna para crear tu portfolio web profesional usando solo HTML, CSS y JavaScript vanilla.

## 📋 Descripción

Este proyecto es una plantilla de portfolio diseñada para estudiantes que quieran mostrar sus proyectos de forma profesional y atractiva. **No utiliza frameworks complejos**, solo tecnologías web básicas que cualquier estudiante puede entender y modificar.

## ✨ Características

- ✅ **100% Responsive** - Se adapta a móviles, tablets y escritorio
- ✅ **Sin dependencias** - Solo HTML, CSS y JavaScript puro
- ✅ **Fácil de personalizar** - Código claro y bien comentado
- ✅ **Animaciones suaves** - Efectos profesionales al hacer scroll
- ✅ **Modal de imágenes** - Amplía las capturas de tus proyectos
- ✅ **Menú móvil funcional** - Hamburguesa menu responsive

## 🚀 Cómo usar

### 1. Descarga el proyecto
```bash
git clone https://github.com/tu-usuario/tu-portfolio.git
cd tu-portfolio
```

### 2. Abre el archivo HTML
Simplemente abre `main.html` en tu navegador favorito. ¡No necesitas instalar nada!

### 3. Personaliza tu información

#### Cambia tu nombre y enlaces
```html
<strong>Tu Nombre Aquí</strong>
<li><a href="https://github.com/tu-usuario">GitHub</a></li>
<li><a href="https://linkedin.com/in/tu-perfil">LinkedIn</a></li>
```

#### Actualiza el Hero
```html
<h1 class="hero-title">TU TÍTULO</h1>
<p class="hero-subtitle">Tu descripción profesional</p>
```

#### Edita tus proyectos
Cada proyecto tiene esta estructura:
```html
<article class="project-card">
  <div class="project-image-container">
    <img src="img/tu-proyecto.jpg" alt="Proyecto">
  </div>
  <div class="project-information">
    <h3 class="project-title">Nombre del Proyecto</h3>
    <p class="project-description">Descripción detallada...</p>
    <div class="technology-stack-list">
      <span class="technology-badge">HTML</span>
      <span class="technology-badge">CSS</span>
    </div>
    <a href="tu-repositorio" class="button-primary">Ver en GitHub</a>
  </div>
</article>
```

## 📁 Estructura del proyecto

```
portfolio/
│
├── main.html          # Archivo principal (TODO EN UNO)
├── README.md           # Este archivo
│
└── img/                # Carpeta para tus imágenes (crear)
    ├── proyecto1.jpg
    ├── proyecto2.jpg
    └── proyecto3.jpg
```

## 🎨 Personalización de colores

Puedes cambiar el color principal editando estas líneas en el CSS:

```css
/* Busca #e76f0d en el código y cámbialo por tu color favorito */
color: #e76f0d;        /* Naranja por defecto */
background: #e76f0d;   /* Naranja por defecto */

/* Ejemplos de otros colores:
   Azul:    #3498db
   Verde:   #2ecc71
   Morado:  #9b59b6
   Rojo:    #e74c3c
*/
```

## 🖼️ Añadir imágenes a tus proyectos

1. Crea una carpeta llamada `img/` en tu proyecto
2. Guarda las capturas de tus proyectos allí
3. En el HTML, descomenta y actualiza:
```html
<!-- Cambiar esto: -->
🖥️

<!-- Por esto: -->
<img src="img/mi-proyecto.jpg" alt="Mi Proyecto">
```



## 📚 Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
  - Flexbox
  - CSS Grid
  - Media Queries
  - Animations
- **JavaScript** - Interactividad
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation

## 🎓 Proyecto educativo

Esta plantilla fue diseñada para:
- **Estudiantes de desarrollo web** que están aprendiendo
- **Bootcamps y cursos** de programación
- **Programadores junior** que necesitan un portfolio rápido
- **Proyectos escolares** de informática

## 📝 Licencia

Este proyecto es de uso libre para fines educativos. Siéntete libre de modificarlo y adaptarlo a tus necesidades.

## 🤝 Contribuciones

¿Encontraste algún error o tienes una mejora? ¡Las contribuciones son bienvenidas!

1. Haz un Fork del proyecto
2. Crea una rama para tu mejora (`git checkout -b mejora/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Sube los cambios (`git push origin mejora/nueva-funcionalidad`)
5. Abre un Pull Request

## 💬 Contacto

Si tienes dudas o sugerencias:
- 📧 Email: tu-email@ejemplo.com
- 💼 LinkedIn: [Tu perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)

---



Hecho con ❤️ por estudiantes para estudiantes