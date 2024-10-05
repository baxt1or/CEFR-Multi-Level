import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center mt-16 max-w-4xl mx-auto h-full w-full">
      <h1 className="text-8xl font-bold text-center">
        Ace Your Language Exams
      </h1>
      <p className="text-lg font-light text-muted-foreground">
        Challenge yourself with real-time assessments and improve your skills
        faster than ever.
      </p>
      <div className="flex items-center gap-2">
        <Button>Take Test</Button>
        <Button variant={"secondary"}>Get started</Button>
      </div>
    </div>
  );
}
