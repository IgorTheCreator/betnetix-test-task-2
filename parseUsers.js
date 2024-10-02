function parseUsers(json) {
  // Парсим json строку
  const parsedObject = JSON.parse(json)

  const result = {}

  // Проходимся по полученному объекту
  for (const { id, name } of parsedObject) {
    // Если поле id или name отсутствуют в объекте, то пропускаем этот объект
    if (!id || !name) {
      continue
    }

    // Если в результате ещё нет id, то добавляем новый id и создаём массив
    if (!result.hasOwnProperty(id)) {
      result[id] = [name]
      continue
    }

    // Пропускаем повторяющиеся имена
    if (result[id].includes(name)) {
      continue
    }

    // Если id уже есть в результате, то просто добавляем в массив строку с именем
    result[id].push(name)
  }

  return result
}

module.exports = { parseUsers }
