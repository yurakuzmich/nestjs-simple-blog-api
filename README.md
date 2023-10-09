Возможности бекенда:

**Авторизация (access token + refresh token)** - partly Done, TODO: provide refresh token

**Создание юзеров (Только админ)** - partly Done, TODO: implement user ROLES

**Получить список юзеров (Только админ) + пагинация через оффсеты** - partly Done, TODO: need to figure out how offset/cursor pagimation should be implemented

**Получить одного юзера (Только админ)** partly Done, TODO: implement user ROLES

**Создание постов (Админ и юзер)** - partlt Done, TODO: mark new post as created by the user

**Получить список постов (Админ и юзер) + пагинация через курсоры** - partly Done, TODO: need to figure out how offset/cursor pagimation should be implemented

**Получить один пост (Админ и юзер) (при запрашивании записать его вьювером)** - partly Done, TODO: mark post as viewed by user

Каждый запрос подразумевает валидацию передаваемых параметров, обработку ошибок и понятный ответ в случае ошибок

Обязательный технический стек:

**Фреймворк NestJS** +

**База данных: PostgreSQL с PrismaJS** +

**API: GraphQL (Code-first)** - TODO: need to implement

**Обернуть весь проект в Docker** +

**Будет плюсом если покрыть юнит тестами модуль Post** -