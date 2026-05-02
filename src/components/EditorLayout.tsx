import { MarkdownInput } from './MarkdownInput'
import { ResumePreview } from './ResumePreview'
import { HistoryDialog } from './HistoryDialog'
import { useEditor } from './EditorContext'

const TOOLBAR_HEIGHT_PX = 56

export function EditorLayout() {
  const {
    markdown,
    setMarkdown,
    historyOpen,
    handleCloseHistory,
    versions,
    handleLoadVersion,
    handleDeleteVersion,
  } = useEditor()

  return (
    <div className="editor-layout h-full" style={{ paddingTop: TOOLBAR_HEIGHT_PX }}>
      <div className="border-r border-gray-200 h-full">
        <MarkdownInput value={markdown} onChange={setMarkdown} />
      </div>

      <ResumePreview markdown={markdown} />

      <HistoryDialog
        open={historyOpen}
        onOpenChange={handleCloseHistory}
        versions={versions}
        onLoad={handleLoadVersion}
        onDelete={handleDeleteVersion}
      />
    </div>
  )
}
