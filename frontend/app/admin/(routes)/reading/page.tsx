import { CardMatchingForm } from "@/components/admin/reading/CardMatchingForm";
import { GapFillingForm } from "@/components/admin/reading/GapFillingForm";
import { HeadingForm } from "@/components/admin/reading/HeadingForm";
import { ListeningTestTable } from "@/components/admin/reading/ListeningTestTable";
import { MCQForm } from "@/components/admin/reading/MCQForm";
import { TrueFalseForm } from "@/components/admin/reading/TrueFalseForm";
import { Tabs } from "@/components/admin/Tabs";

const tabs = [
  "All Tests",
  "Gap Flling",
  "Matching Heading",
  "Card Matching",
  "True False or NG",
  "Multiple Choice",
];

const AdminReadingPage = () => {
  const contents = [
    <ListeningTestTable />,
    <GapFillingForm />,
    <HeadingForm />,
    <CardMatchingForm />,
    <TrueFalseForm />,
    <MCQForm />,
  ];
  return (
    <div>
      <Tabs tabsLabels={tabs} contents={contents} />
    </div>
  );
};

export default AdminReadingPage;
