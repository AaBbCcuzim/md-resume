import { memo } from 'react'
import { parseMarkdown } from '@/lib/markdown'
import { ResumeTemplate } from './ResumeTemplate'

interface ResumePreviewProps {
  markdown: string
}

export const ResumePreview = memo(function ResumePreview({
  markdown,
}: ResumePreviewProps) {
  const html = parseMarkdown(markdown)

  return (
    <div className="resume-preview-wrapper h-full overflow-y-auto bg-gray-100 p-8 flex justify-center print:bg-white print:p-0 print:block">
      {markdown.trim() ? (
        <ResumeTemplate html={html} />
      ) : (
        <p className="text-gray-400 mt-20">Preview will appear here...</p>
      )}
    </div>
  )
})
