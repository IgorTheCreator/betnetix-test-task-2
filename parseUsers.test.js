const { parseUsers } = require('./parseUsers')

test('succesful result', () => {
  const object = JSON.stringify([
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '1', name: 'Alicia' },
  ])

  expect(parseUsers(object)).toStrictEqual({
    1: ['Alice', 'Alicia'],
    2: ['Bob'],
  })
})

test('empty array', () => {
  const object = JSON.stringify([])

  expect(parseUsers(object)).toStrictEqual({})
})

test('object with missing fields', () => {
  const object = JSON.stringify([
    { id: '1' },
    { id: '2', name: 'Bob' },
    { id: '1', name: 'Alicia' },
  ])

  expect(parseUsers(object)).toStrictEqual({ 1: ['Alicia'], 2: ['Bob'] })
})

test('object with duplicate names', () => {
  const object = JSON.stringify([
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '1', name: 'Alice' },
  ])

  expect(parseUsers(object)).toStrictEqual({ 1: ['Alice'], 2: ['Bob'] })
})
