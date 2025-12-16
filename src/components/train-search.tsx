import {
  IconChevronDown,
  IconExchange,
  IconListDetails,
  IconStatusChange,
} from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function TrainSearch() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="mx-auto flex w-3/5 flex-col justify-center gap-8 border p-8">
      <div className="flex items-center gap-4">
        <Button variant="secondary">
          <IconStatusChange />
          PNR Status
        </Button>
        <Button variant="secondary">
          <IconListDetails />
          Charts/Vacancy
        </Button>
      </div>

      <h1 className="font-semibold text-2xl">Book Ticket</h1>

      <div className="flex w-full items-center gap-4">
        <Input placeholder="From" />
        <Button size="icon" variant="ghost">
          <IconExchange />
        </Button>
        <Input placeholder="To" />
      </div>

      <div className="grid w-full grid-cols-3 gap-4">
        <Popover onOpenChange={setOpen} open={open}>
          <PopoverTrigger className="w-full">
            <Button
              className="w-full justify-between font-normal"
              id="date"
              variant="outline"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <IconChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto overflow-hidden p-0">
            <Calendar
              captionLayout="dropdown"
              mode="single"
              onSelect={(newDate) => {
                setDate(newDate);
                setOpen(false);
              }}
              selected={date}
            />
          </PopoverContent>
        </Popover>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue>All Classes</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1A">AC First Class (1A)</SelectItem>
            <SelectItem value="2A">AC 2 Tier (2A)</SelectItem>
            <SelectItem value="3A">AC 3 Tier (3A)</SelectItem>
            <SelectItem value="CC">AC Chair Car (CC)</SelectItem>
            <SelectItem value="SL">Sleeper (SL)</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue>General</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="ladies">Ladies</SelectItem>
            <SelectItem value="lower-berth">
              Lower Berth/Senior Citizen
            </SelectItem>
            <SelectItem value="disability">Person with Disability</SelectItem>
            <SelectItem value="duty-pass">Duty Pass</SelectItem>
            <SelectItem value="tatkal">Tatkal</SelectItem>
            <SelectItem value="premium-tatkal">Premium Tatkal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-4">
          <Checkbox id="disability" />
          <Label htmlFor="disability">Person with Disability Concession</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="flexible" />
          <Label htmlFor="flexible">Fleible with Date</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="available_berth" />
          <Label htmlFor="available_berth">Train with Available Berth</Label>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox id="pass" />
          <Label htmlFor="pass">Railway Pass Concession</Label>
        </div>
      </div>

      <Button>Search</Button>
    </div>
  );
}
