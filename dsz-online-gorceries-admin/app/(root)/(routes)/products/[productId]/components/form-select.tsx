import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

interface FormSelectProps {
  field: any;
  selectArr: any[];
  label: string;
  searchLabel: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  field,
  selectArr,
  label,
  searchLabel,
}) => {
  const [offers, setOffers] = useState(field.value);

  const onSelect = (item: any) => {
    let updatedField: any[] = [];

    if (field.value.some((value: any) => value.id === item.id)) {
      updatedField = field.value.filter((value: any) => value.id !== item.id);
    } else {
      updatedField = [...field.value, item];
    }
    field.onChange(updatedField);
    setOffers(updatedField);
  };

  return (
    <FormItem className="flex flex-col">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-[200px] justify-between",
                !field.value && "text-muted-foreground"
              )}
            >
              {label}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={searchLabel} />
              <CommandEmpty>No items found.</CommandEmpty>
              <CommandGroup>
                {selectArr.map((item) => (
                  <CommandItem
                    value={item}
                    key={item.id}
                    onSelect={() => {
                      onSelect(item);
                    }}
                  >
                    {offers.some((val: any) => val.id === item.id) && (
                      <Check className={cn("mr-2 h-4 w-4")} />
                    )}

                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </FormControl>
    </FormItem>
  );
};

export default FormSelect;
