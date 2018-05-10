import fs from 'fs'
import * as lib from '../index'

const folders = [`${__dirname}/../formaters`, `${__dirname}/../validators`]
const ignored = ['__tests__', 'index.js']

test('all functions are exported in the full lib', () => {
  folders.forEach(folder => {
    fs.readdir(folder, (err, files) => {
      const filtered = files
        .filter(file => ignored.indexOf(file) === -1)
        .map(file => file.replace('.js', ''))

      expect(Object.keys(lib).sort()).toEqual(
        expect.arrayContaining(filtered.sort())
      )
    })
  })
})
