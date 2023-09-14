import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormSelectProps {
  field: any;
  selectArr: any[];
  label: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ field, selectArr, label }) => {
  return (
    <>
      <FormItem>
        <FormLabel className="font-bold text-md">{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className="p-2 border bg-white rounded-sm hover:bg-accent hover:text-accent-foreground">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {selectArr.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default FormSelect;