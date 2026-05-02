import { createContext, useContext, useState, type ReactNode } from 'react'
import { DEFAULT_RESUME_MARKDOWN } from '@/lib/constants'
import { useAutoSave, loadAutoSave, clearAutoSave } from '@/hooks/useAutoSave'
import { useResumeHistory } from '@/hooks/useResumeHistory'
import type { ResumeVersion } from '@/types/resume'

interface EditorContextValue {
  markdown: string
  setMarkdown: (md: string) => void
  handleNew: () => void
  handleExportPDF: () => void
  handleSaveVersion: () => void
  handleOpenHistory: () => void
  handleCloseHistory: () => void
  historyOpen: boolean
  versions: ResumeVersion[]
  handleLoadVersion: (v: ResumeVersion) => void
  handleDeleteVersion: (id: string) => void
  hasContent: boolean
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function EditorProvider({ children }: { children: ReactNode }) {
  const [markdown, setMarkdown] = useState(() => {
    return loadAutoSave() || DEFAULT_RESUME_MARKDOWN
  })
  const [historyOpen, setHistoryOpen] = useState(false)
  const { versions, addVersion, deleteVersion } = useResumeHistory()

  useAutoSave(markdown)

  function handleNew() {
    setMarkdown(DEFAULT_RESUME_MARKDOWN)
    clearAutoSave()
  }

  function handleExportPDF() {
    window.print()
  }

  function handleSaveVersion() {
    addVersion(markdown)
  }

  function handleOpenHistory() {
    setHistoryOpen(true)
  }

  function handleCloseHistory() {
    setHistoryOpen(false)
  }

  function handleLoadVersion(v: ResumeVersion) {
    setMarkdown(v.markdown)
  }

  function handleDeleteVersion(id: string) {
    deleteVersion(id)
  }

  return (
    <EditorContext.Provider
      value={{
        markdown,
        setMarkdown,
        handleNew,
        handleExportPDF,
        handleSaveVersion,
        handleOpenHistory,
        handleCloseHistory,
        historyOpen,
        versions,
        handleLoadVersion,
        handleDeleteVersion,
        hasContent: markdown.trim().length > 0,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

export function useEditor(): EditorContextValue {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error('useEditor must be used within EditorProvider')
  return ctx
}
