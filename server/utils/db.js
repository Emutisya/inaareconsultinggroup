import fs from 'fs/promises'
import path from 'path'

const dbPath = path.resolve(process.cwd(), 'server', 'db.json')

export const readDb = async () => {
  const raw = await fs.readFile(dbPath, 'utf-8')
  return JSON.parse(raw)
}

export const writeDb = async (data) => {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf-8')
}

export const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 100000)}`
