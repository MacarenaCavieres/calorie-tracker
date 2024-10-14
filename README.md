# Proyecto: Registro de Calorías

## Descripción
Este proyecto es una aplicación para registrar y gestionar actividades relacionadas con el consumo y quema de calorías. El usuario puede agregar actividades como comer o hacer ejercicio, ver la lista de actividades realizadas, y obtener un resumen de las calorías consumidas, quemadas y el total restante. La aplicación también permite resetear todos los datos guardados.

Para ver el proyecto haz click [aquí](https://macarenacavieres.github.io/calorie-tracker/)

## Características
- Agregar actividades con nombre, categoría (comida o ejercicio) y cantidad de calorías.
- Visualización de todas las actividades registradas.
- Cálculo automático de calorías consumidas, quemadas y el total.
- Funcionalidad para editar y eliminar actividades.
- Almacenamiento persistente en `localStorage` para mantener los datos al recargar la página.
- Posibilidad de resetear toda la aplicación.

## Estructura del proyecto

- **App.tsx**: Componente principal de la aplicación que maneja el estado global de las actividades y las acciones disponibles (agregar, editar, eliminar, resetear).
- **Form.tsx**: Formulario para agregar o editar una actividad. Permite seleccionar la categoría, describir la actividad y establecer la cantidad de calorías.
- **ActivityList.tsx**: Componente que lista todas las actividades registradas, permitiendo la edición y eliminación de las mismas.
- **CalorieTracker.tsx**: Componente que muestra un resumen de las calorías consumidas, quemadas y el balance total.
- **CalorieDisplay.tsx**: Componente para mostrar visualmente el resumen de calorías.

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/MacarenaCavieres/calorie-tracker.git
```
2. Instalar las dependencias:
```bash
npm install
```
3. Ejecutar el proyecto
```bash
npm start
```

## Uso

- Al abrir la aplicación, puedes agregar actividades (comidas o ejercicios) utilizando el formulario.
- Cada actividad registrada se mostrará en la lista de actividades.
- El resumen de calorías (consumidas, quemadas y total) se actualizará automáticamente conforme se agreguen o eliminen actividades.
- Puedes resetear la aplicación con el botón **"Resetear app"**, lo que eliminará todas las actividades guardadas.

## Estado Global

El estado de la aplicación es manejado a través de un contexto (`ActivityContext`) que utiliza `useReducer` para gestionar las acciones de agregar, editar, eliminar actividades, así como para resetear la aplicación.

## Almacenamiento en localStorage

Las actividades se guardan en `localStorage` para asegurar que los datos persistan entre sesiones del navegador.

## Tecnologías utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **UUID** para generar identificadores únicos.
- **LocalStorage** para persistir datos en el navegador.

## Desarrollado 

Desarrollado por [MCavieres](https://www.linkedin.com/in/macarena-cavieres-rubio/)
