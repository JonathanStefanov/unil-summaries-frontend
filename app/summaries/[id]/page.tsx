import SummaryViewer from "@/components/summaries/summaryviewer";

async function getData(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/summaries/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

}


export default async function Page({ params }: { params: { id: number } }) {
    const summary: Summary = await getData(params.id).then((item: any) => ({
        id: item.id,
        pdfUrl: item.file,
        uploaderName: item.uploader_name,
        rating: item.rating,
        name: item.name,
        course: item.course_name,
        faculty: item.faculty_name,
    }));
    return (
        <div>
            <SummaryViewer summary={summary} />
        </div>
    );
}