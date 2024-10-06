import { ExtractQuestionsForm } from "@/components/admin/listening/ExtractQuestionsForm";
import { GapFillingPart1Form } from "@/components/admin/listening/GapFillingPart1Form";
import { GapFillingPart6Form } from "@/components/admin/listening/GapFillingPart6Form";
import { MapQuestionsForm } from "@/components/admin/listening/MapQuestionsForm";
import { MatchSpeakersForm } from "@/components/admin/listening/MatchSpeakersForm";
import { MCQPart1Form } from "@/components/admin/listening/MCQPart1Form";
import { ReadingTestsTable } from "@/components/admin/listening/ReadingTestsTable";
import { Tabs } from "@/components/admin/Tabs";

const tabs = [
  "All Tests",
  "MCQ (Part 1)",
  "Gap Filling",
  "Matching Speakers",
  "Map Questions",
  "Extract Questions",
  "Gap Filling (Part 6)",
];

const AdminListeningPage = () => {
  const contents = [
    <ReadingTestsTable />,
    <MCQPart1Form />,
    <GapFillingPart1Form />,
    <MatchSpeakersForm />,
    <MapQuestionsForm />,
    <ExtractQuestionsForm />,
    <GapFillingPart6Form />,
  ];
  return (
    <div>
      <Tabs tabsLabels={tabs} contents={contents} />
    </div>
  );
};

export default AdminListeningPage;
