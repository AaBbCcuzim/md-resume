import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { STORAGE_KEYS, MAX_HISTORY } from '@/lib/constants'
import type { ResumeVersion } from '@/types/resume'

export function useResumeHistory() {
  const [versions, setVersions] = useLocalStorage<ResumeVersion[]>(
    STORAGE_KEYS.HISTORY,
    [],
  )

  const addVersion = useCallback(
    (markdown: string) => {
      const version: ResumeVersion = {
        id: crypto.randomUUID(),
        name: new Date().toLocaleString(),
        markdown,
        updatedAt: new Date().toISOString(),
      }
      setVersions((prev) => [version, ...prev].slice(0, MAX_HISTORY))
    },
    [setVersions],
  )

  const deleteVersion = useCallback(
    (id: string) => {
      setVersions((prev) => prev.filter((v) => v.id !== id))
    },
    [setVersions],
  )

  return { versions, addVersion, deleteVersion }
}
