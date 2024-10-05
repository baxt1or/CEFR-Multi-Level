import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  label: string;
};

const Answers = ({ label }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-2xl border border-gray-200 px-8 py-2 text-md font-bold cursor-pointer">
          Part {label}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3">
        <div className="grid grid-cols-1 ">
          <p>1. A</p>
          <p>2. D</p>
          <p>3. B</p>
          <p>4. C</p>
          <p>5. B</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Answers;
