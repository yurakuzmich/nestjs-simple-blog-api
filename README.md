Возможности бекенда:

Авторизация (access token + refresh token)

Создание юзеров (Только админ)

Получить список юзеров (Только админ) + пагинация через оффсеты

Получить одного юзера (Только админ)

Создание постов (Админ и юзер)

Получить список постов (Админ и юзер) + пагинация через курсоры

Получить один пост (Админ и юзер) (при запрашивании записать его вьювером)



Каждый запрос подразумевает валидацию передаваемых параметров, обработку ошибок и понятный ответ в случае ошибок



Обязательный технический стек:

Фреймворк NestJS +

База данных: PostgreSQL с PrismaJS +

API: GraphQL (Code-first) -

Обернуть весь проект в Docker -

Будет плюсом если покрыть юнит тестами модуль Post -