import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type MarkdownContent = {
  content: string
  data: {
    [key: string]: any
  }
}

export function getMarkdownContent(path: string): MarkdownContent {
  const filePath = `src/data/work/${path}.md`
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)
  return { content, data }
} 