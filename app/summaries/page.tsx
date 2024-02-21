import SummaryCard from "@/components/summarycard";

async function getData() {
    console.log('fetching data')
    const res = await fetch(process.env.API_URL + '/api/summaries/')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

  }

export default async function Summaries() {
    const summaries: Summary[] = (await getData()).map((item: any) => ({
      id: item.id,
      pdfUrl: item.file,
      uploaderName: item.uploader_name,
      rating: item.rating,
      name: item.name,
      course: item.course_name,
      faculty: item.faculty_name,
    }));;

    const test = await getData()

    return (
        <div>
          <p className="text-xl font-bold">Latest Summaries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {summaries.map((summary: Summary) => (
            <SummaryCard
              key={summary.id}
              summary={summary}
            />
          ), [])}
          </div>
        </div>
    );
}