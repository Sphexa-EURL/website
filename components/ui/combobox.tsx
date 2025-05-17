
import * as React from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface ComboBoxOption {
    value: string;
    label: string;
}

interface ComboBoxProps {
    className?: string;
    options: ComboBoxOption[];
    value: string;
    type: string;
    onChange: (value: string) => void;
}
export function ComboBox(
    { options, value, type, onChange, className = "w-[200px] justify-between" }: ComboBoxProps,
) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={className}
                >
                    {value
                        ? options.find((option) => option.value === value)
                            ?.label
                        : `Select ${type}...`}
                    {open
                        ? <ChevronUp className="ml-2 h-4 w-4 opacity-50" />
                        : <ChevronDown className="ml-2 h-4 w-4 opacity-50" />}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder={`Search ${type}...`}
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>No {type} found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        onChange(
                                            currentValue === value
                                                ? ""
                                                : currentValue,
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {option.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === option.value
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
