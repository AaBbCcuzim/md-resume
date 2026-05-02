import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TooltipProvider } from '@/components/ui/tooltip'
import { EditorToolbar } from '@/components/EditorToolbar'
import { EditorProvider } from '@/components/EditorContext'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <EditorProvider>
      <TooltipProvider delayDuration={300}>
        <div className="h-screen flex flex-col">
          <EditorToolbar />
          <main className="flex-1 overflow-hidden">
            <Outlet />
          </main>
        </div>
      </TooltipProvider>
    </EditorProvider>
  )
}
