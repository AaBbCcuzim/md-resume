import { useEffect, useRef } from 'react'
import { STORAGE_KEYS } from '@/lib/constants'

export function useAutoSave(markdown: string) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEYS.AUTOSAVE, markdown)
      } catch {
        // localStorage unavailable
      }
    }, 1500)

    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current)
    }
  }, [markdown])

}

export function loadAutoSave(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTOSAVE)
  } catch {
    return null
  }
}

export function clearAutoSave() {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTOSAVE)
  } catch {
    // ignore
  }
}
