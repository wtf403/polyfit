### Про git flow
Есть следующие ветки:
- **feat/<команда>/<имя-фичи>** (пилим фичи здесь)
- **develop** (синхранизируемся здесь)
- **release** (подготовка к релизу)
- **master/<версия>** (здесь продакшн)
- **hotfix/<имя-фикса>** (исправления багов в продакшн)

### Про branch protaction:
- За фронтами закреплена ветка feat/front/<имя-фичи>
- За беками закреплена ветка feat/back/<имя-фичи>
- За девопсами закреплены ветки master и hotfix
- Фронты и бэки синхранизируются в ветке develop мёржами из фича веток, напрямую в development коммитить запрещено
- Власть админа (@tifylop) безгранична. Админ трогает репу только в черезвычайных случаях. Логин и пароль лежат в дискуссиях тимы @admin

### Про CI/CD:
- При мёрже в delelop
    - [ ] Auto approve, если codeowner правит свои файлы
    - [ ] Добовляет тег с именем фичи
- При мёрже в release
    - [ ] eslint
    - [ ] editorconfig
    - [ ] prettier
- При мёрже в master
    - [ ] Деплой на сервак
    - [ ] Удаление фича веток


![force push](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b2be0d21-0718-4dc1-a555-9fba679696dc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221018T165431Z&X-Amz-Expires=86400&X-Amz-Signature=032b602540082ea8789f43d91c2f296c452e42f214e37b95aca6753919a89214&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
