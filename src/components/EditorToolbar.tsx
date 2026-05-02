import { FilePlus, Save, Clock, FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useEditor } from './EditorContext'

export function EditorToolbar() {
  const {
    hasContent,
    handleNew,
    handleSaveVersion,
    handleOpenHistory,
    handleExportPDF,
  } = useEditor()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b bg-white flex items-center justify-between px-4">
      <h1 className="text-lg font-bold">md-resume</h1>

      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={handleNew}>
              <FilePlus className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>New Resume</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSaveVersion}
              disabled={!hasContent}
            >
              <Save className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Save Version</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={handleOpenHistory}>
              <Clock className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>History</TooltipContent>
        </Tooltip>

        <Button onClick={handleExportPDF} disabled={!hasContent}>
          <FileDown className="h-4 w-4 mr-1" />
          Export PDF
        </Button>
      </div>
    </header>
  )
}
