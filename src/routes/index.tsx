import { createFileRoute } from '@tanstack/react-router'
import { EditorLayout } from '@/components/EditorLayout'

export const Route = createFileRoute('/')({
  component: () => <EditorLayout />,
})
