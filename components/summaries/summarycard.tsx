/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MRRYFMhx606
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import Link from "next/link";
interface SummaryCardProps {
  summary: Summary;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  return (
    <Card className="w-full max-w-lg">
      <Link href={"/summaries/" + summary.id}>
        <div className="grid gap-2 p-6">
          <div className="flex items-center space-x-4">
            <div className="grid gap-1.5">
              <h1 className="text-lg font-bold">{summary.name}</h1>
              <div className="flex items-center space-x-2 text-sm">
                <GraduationCapIcon className="h-4 w-4 opacity-70" />
                <span>{summary.faculty}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <UserIcon className="h-4 w-4 opacity-70" />
                <span>{summary.course}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="grid gap-1.5">
              <div className="flex items-center space-x-2 text-sm">
                <UploadIcon className="h-4 w-4 opacity-70" />
                <span>Uploaded by @{summary.uploaderName}</span>
              </div>
              <h1 className="text-sm">Appreciation : {summary.rating}</h1>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default SummaryCard;

function GraduationCapIcon(props) {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
