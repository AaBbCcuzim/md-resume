import { marked } from 'marked'

marked.use({
  gfm: true,
  breaks: false,
})

export function parseMarkdown(md: string): string {
  try {
    return marked.parse(md, { async: false }) as string
  } catch {
    return `<p style="color: red;">Markdown parse error</p><pre>${escapeHtml(md)}</pre>`
  }
}

export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function extractPreview(md: string): string {
  const firstLine = md.trim().split('\n')[0]
  return firstLine.replace(/^#\s*/, '').slice(0, 60) || '(empty)'
}
