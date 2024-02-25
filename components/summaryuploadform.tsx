import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Combobox } from "./ui/combobox";
import { useForm, Controller } from "react-hook-form";

export default function SummaryUploadForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <center>
      <Card className="m-3 w-full max-w-lg">
        <CardHeader className="space-y-2">
          <CardTitle>Upload document</CardTitle>
          <CardDescription>
            Submit your document to the library.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter the title"
                    {...register("title")}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="faculty">Faculty</Label>
                  <Controller
                    name="faculty"
                    control={control}
                    render={({ field }) => (
                      <Combobox
                        options={[
                          { label: "Faculty of Arts", value: "arts" },
                          { label: "Faculty of Science", value: "science" },
                          {
                            label: "Faculty of Engineering",
                            value: "engineering",
                          },
                          { label: "Faculty of Medicine", value: "medicine" },
                        ]}
                        placeholder="Select faculty"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="course">Course</Label>
                  <Controller
                    name="course"
                    control={control}
                    render={({ field }) => (
                      <Combobox
                        options={[
                          { label: "Computer Science", value: "cs" },
                          { label: "Mathematics", value: "math" },
                          { label: "Physics", value: "physics" },
                          { label: "Biology", value: "biology" },
                        ]}
                        placeholder="Select course"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="file">File</Label>
                  <Input id="file" type="file" {...register("file")} required />
                </div>
              </div>
              <Button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                Upload
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </center>
  );
}
