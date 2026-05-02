import { type KeyboardEvent } from 'react'

interface MarkdownInputProps {
  value: string
  onChange: (value: string) => void
}

export function MarkdownInput({ value, onChange }: MarkdownInputProps) {
  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Tab') {
      e.preventDefault()
      const textarea = e.currentTarget
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newValue = value.slice(0, start) + '  ' + value.slice(end)
      onChange(newValue)
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2
      })
    }
  }

  return (
    <textarea
      className="w-full h-full resize-none font-mono text-sm p-6 bg-gray-50 border-0 outline-none text-gray-900 placeholder:text-gray-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Start writing your resume in markdown..."
      spellCheck
    />
  )
}
