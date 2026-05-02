interface ResumeTemplateProps {
  html: string
}

export function ResumeTemplate({ html }: ResumeTemplateProps) {
  return (
    <div
      className="resume-template w-[210mm] min-h-[297mm] bg-white shadow-lg mx-auto p-8 print:shadow-none print:w-full print:min-h-0 print:p-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
