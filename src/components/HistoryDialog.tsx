import { Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import type { ResumeVersion } from '@/types/resume'
import { extractPreview } from '@/lib/markdown'

interface HistoryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  versions: ResumeVersion[]
  onLoad: (version: ResumeVersion) => void
  onDelete: (id: string) => void
}

export function HistoryDialog({
  open,
  onOpenChange,
  versions,
  onLoad,
  onDelete,
}: HistoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[70vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Resume History</DialogTitle>
          <DialogDescription className="sr-only">
            Browse and restore previously saved resume versions.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-2 mt-2">
          {versions.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8">
              No saved versions yet. Click the Save button to save your first
              version.
            </p>
          ) : (
            versions.map((v) => (
              <div
                key={v.id}
                className="flex items-center justify-between border rounded-lg p-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{v.name}</p>
                  <p className="text-xs text-gray-500">
                    {extractPreview(v.markdown)}
                  </p>
                </div>
                <div className="flex gap-1 ml-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onLoad(v)
                      onOpenChange(false)
                    }}
                  >
                    Load
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onDelete(v.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
