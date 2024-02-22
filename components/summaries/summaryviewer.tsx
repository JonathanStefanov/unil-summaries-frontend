"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iuLpMLtaTHo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


interface SummaryViewerProps {
  summary: Summary;
}

const SummaryViewer: React.FC<SummaryViewerProps> = ({ summary }) => {
    return (
      <div className="flex flex-col w-full min-h-screen">
        <header className="p-4 border-b">
          <div className="container flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 md:space-y-0">
              <h1 className="text-lg font-bold">{summary.name}</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Summary by @{summary.uploaderName}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <ChevronUpIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">{summary.rating}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <PDFViewer pdfUrl={summary.pdfUrl} />
        </main>
      </div>
    )
  }
  
  function ChevronDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronUpIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  }
  


export default SummaryViewer;


interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div>
      <iframe 
      src={pdfUrl} 
      width="100%"
      height="1000px"
      id="iframePdf"
      type="application/pdf"
       />
    </div>
  );
};