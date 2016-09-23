# Devents site

## Intro

El proyecto está realizado en React. (Está conectado a un .json de data dummy para realizar pruebas sin montar la [API](https://github.com/fforres/devents_api) o el [crawler](https://github.com/fforres/devents_crawl))

### Instalación

- `clonar el repo`
- `npm install`
- `npm start`

## Descripción de los componentes de los componentes.

Dentro de `/app/components` se encuentrar los componentes visuales de la aplicación.

- `EventList` El componente que contiene la lista de eventos.
- `EventCard` Componente que se encarga de la tarjeta de visualización de un evento.
- `EventFilter` Componente que controla el filtro y orden de la lista de eventos.

- `Icon` Componente 'helper' para renderizar íconos de font-awesome

- `Jumbo` Componente donde se encuentra el header principal del sitio
- `Suggestion` Componente donde se encuentra el Botón de "sugerir un evento"
