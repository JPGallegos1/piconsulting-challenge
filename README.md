# Pi Consulting Challenge

### Reproducir de el challenge de forma local

- Clonar el repositorio: `git clone https://github.com/JPGallegos1/piconsulting-challenge.git`
- Instalar las dependencias: `npm install`
- Iniciar el proyecto: `npm run dev`

### Stack de tecnologías elegido

- React, con Vite
- TypeScript
- Redux
- Tailwind CSS
- React Hook Form

### Tareas completadas basadas en el challenge

**Requeridas**:

- [x] Precargar los resultados de los personajes y mostrarlos en la vista.
- [x] El componente de presentación debe mostrar el nombre del personaje y al menos otras dos
      características más obtenidas de la API además de un botón eliminar.
- [x] El botón eliminar debe borrar el personaje de la lista
- [x] Incluir un campo de búsqueda que muestre sólo los resultados cuyo nombre contenga el
      texto introducido
- [x] Agregar un botón que habilite un formulario para agregar una nueva persona a la lista,
      manejando las modificaciones en el state. Se considera un plus si se realiza con la librería:
      https://react-hook-form.com/

**Deseables**:

- [x] Realizar una única consulta a la API con los primeros 10 resultados y luego interactuar con él store.
- [x] Mostrar mensaje o imagen de carga (loading).
- [x] Realizar al menos tres componentes independientes: SearchForm, CardList y Card.
- [x] Realizar validaciones necesarias.

**Desafíos**:

- [x] Usar componentes funcionales
- [x] Usar alguna librería de estilos

### Últimas aclaraciones

- Hice un modal para la carga de un nuevo personaje, aunque bien se podría haber utilizado una nueva ruta tipo `/character/add` pero también implicaba una carga en las dependencias al incorporar la librería de `react-router`. Fui por esta opción.
- Utilicé las validaciones que te ofrece la misma librería de `react-hook-form` pero también se podría haber utilizado `yup` o `zod` para las mismas.
- Faltó mejorar un poco el responsive 🙃. Sorry about that
