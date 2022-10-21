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

### Get Started:

1. **Настроить Редактор**

   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

   - [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

   - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

   - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

   - В настройки добавить
   ```
        {
          "css.validate": false, // Disable built-in lint
          "less.validate": false, // Disable built-in lint
          "scss.validate": false, // Disable built-in lint
          "stylelint.enable": true, // Enable stylelint
          "stylelint.validate": ["css", "less", "postcss", "vue"], // Add vue files
          "vetur.validation.style": false, // Disable vetur style validation
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
            "source.fixAll.ediroconfig": true
            "source.fixAll.stylelint": true
          },
        }
    ```

    В Intellij Idea по идее всё, кроме ESLint плагина должно работать из коробки

2. **Настроить ssh в github**

3. **Скопировать репу по ssh**
   `git clone git@github.com:polyfit-live/polyfit.git`
4. **Создать и переключиться в фича ветку**
   `git checkout -b feat/front/create-yet-another-feature`
5. **Cделать побольше коммитов**
   `git add . `
   `git commit -m 'create header navigation'`

6. **Запушить изменения на remote**
   ` git push --set-upstream origin feat/front/create-yet-another-component`

7. **Зайти на гитхаб, создать пулл реквест, проверить тесты**

8. **Если тесты не прошли выяснить в чём дело, закоммитить правки (новый PR создавать не нужно), обратиться за помощью**
