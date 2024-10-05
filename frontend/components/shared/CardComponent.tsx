import Link from "next/link";

type Props = {
  testName: string;
  testNumber: string;
  duration: string;
  id: string;
  testType: string;
};

export const CardComponent = ({
  testName,
  testNumber,
  duration,
  id,
  testType,
}: Props) => {
  return (
    <Link
      href={`/${testType}/${id}`}
      className="flex flex-col gap-y-4 rounded-2xl border border-gray-200 p-4 hover:shadow-md items-center justify-center"
    >
      <h1 className="flex items-center gap-2 uppercase font-semibold text-black text-center text-4xl">
        {testName}
        <span>{testNumber}</span>
      </h1>

      <h1 className="uppercase ">Full Test</h1>

      <div className="flex items-center gap-x-12">
        <p className="text-lg text-muted-foreground">35 Questions</p>
        <p className="text-lg text-muted-foreground">{duration} Minutes</p>
      </div>
    </Link>
  );
};
