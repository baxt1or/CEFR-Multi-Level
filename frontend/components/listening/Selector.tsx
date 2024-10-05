import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Selector = () => {
  return (
    <Select>
      <SelectTrigger className="w-[60px]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="A">A</SelectItem>
          <SelectItem value="B">B</SelectItem>
          <SelectItem value="C">C</SelectItem>
          <SelectItem value="D">D</SelectItem>
          <SelectItem value="E">E</SelectItem>
          <SelectItem value="F">F</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
