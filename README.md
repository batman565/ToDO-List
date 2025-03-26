# To-Do List App

Это простое приложение To-Do списка, разработанное с использованием React и MobX для управления состоянием. Приложение позволяет пользователям добавлять, и удалять задачи, а также отмечать их как выполненные. Для имитации API используется json-server, что позволяет легко управлять данными.

## Функциональные возможности

- Добавление новых задач
- Отметка задач как выполненных
- Удаление задач
- Поддержка темной и светлой тем
- Локальное кэширование данных с использованием localStorage
- Динамическое обновление интерфейса при изменении состояния

## Технологии

- [React](https://reactjs.org/) - библиотека для построения пользовательских интерфейсов
- [MobX](https://mobx.js.org/README.html) - библиотека для управления состоянием
- [json-server](https://github.com/typicode/json-server) - простой способ создания REST API для разработки

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/SlavaDoroshenko/to-do-list-app.git
   cd to-do-list-app
   npm i
   npx json-server --watch db.json --port 5000
   npm run dev
   ```
