# CLI Bookshelf

## Опис

Це консольний додаток для управління списком книг. Ви можете:

- Додати книгу
- Переглянути всі книги
- Знайти книгу за ID
- Оновити дані книги
- Видалити книгу

## Використання

Запускайте команди у терміналі:

### Отримати всі книги

```bash
node app.js --action read

```

### Додати книгу

```bash
node app.js --action add --title "Назва книги" --author "Автор"

```

### Знайти книгу за ID

```bash
node app.js --action getById --id "123456"

```

### Оновити книгу

```bash
node app.js --action updateById --id "123456" --title "Нова назва" --author "Новий автор"

```

### Видалити книгу

```bash
node app.js --action deleteById --id "123456"

```
