import { FaBook, FaCheckCircle, FaRegSmile } from "react-icons/fa";

export function Features() {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access the best summaries. Save time. Improve your grades.
              </p>
            </div>
            <div className="mx-auto max-w-sm items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="grid gap-1">
                <center>
                <FaBook className="w-8 h-8 rounded-lg bg-gray-100 p-2 grid place-items-center" />
                </center>
                <h3 className="text-xl font-bold">Wide Range of Subjects</h3>
                <p className="text-gray-500 dark:text-gray-400">Access summaries for all your courses.</p>
              </div>
              <div className="grid gap-1">
                <center>
                <FaCheckCircle className="w-8 h-8 rounded-lg bg-gray-100 p-2 grid place-items-center" />
                </center>
                <h3 className="text-xl font-bold">High-Quality Summaries</h3>
                <p className="text-gray-500 dark:text-gray-400">Our summaries are accurate and comprehensive.</p>
              </div>
              <div className="grid gap-1">
                <center>
                <FaRegSmile className="w-8 h-8 rounded-lg bg-gray-100 p-2 grid place-items-center" />
                </center>
                <h3 className="text-xl font-bold">User-Friendly Interface</h3>
                <p className="text-gray-500 dark:text-gray-400">Easy to search, easy to download.</p>
              </div>
            </div>
          </div>
        </section>
    );
}