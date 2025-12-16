import { IconChevronDown } from "@tabler/icons-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <Button>Login</Button>
          <Button variant="ghost">Register</Button>
          <Button variant="ghost">Agent Login</Button>
          <Button variant="ghost">Contact Us</Button>
          <Button variant="ghost">Help and Support</Button>
          <Button variant="link">Daily Deals</Button>
          <Button variant="secondary">Alerts</Button>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                IRCTC Exclusive
                <IconChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>IRCTC i-Pay</DropdownMenuItem>
              <DropdownMenuItem>Shopping</DropdownMenuItem>
              <DropdownMenuItem>Gift Card</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                Trains
                <IconChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Book Ticket</DropdownMenuItem>
              <DropdownMenuItem>Foreign Tourist Booking</DropdownMenuItem>
              <DropdownMenuItem>Connecting Journey Booking</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>IRCTC Trains</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Group Booking</DropdownMenuItem>
                  <DropdownMenuItem>
                    Travel Insurance Claim Process
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Cancel Ticket</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>E-tickets</DropdownMenuItem>
                  <DropdownMenuItem>Counter Ticket</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>PNR Enquiry</DropdownMenuItem>
              <DropdownMenuItem>Train Schedule</DropdownMenuItem>
              <DropdownMenuItem>Track Your Train</DropdownMenuItem>
              <DropdownMenuItem>FTR Coach/Train Booking</DropdownMenuItem>
              <DropdownMenuItem>Dogs/Cats Booking</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="link">Buses</Button>
          <Button variant="link">Flights</Button>
          <Button variant="link">Hotels</Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                Holidays
                <IconChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Tourist Trains</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Bharat Gaurav</DropdownMenuItem>
                  <DropdownMenuItem>Maharaja's Express</DropdownMenuItem>
                  <DropdownMenuItem>Golden Chariot</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Tour Packages</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Domestic Packages</DropdownMenuItem>
                  <DropdownMenuItem>International Packages</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Stays</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Retiring Room</DropdownMenuItem>
                  <DropdownMenuItem>Lounge</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                Meals
                <IconChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Book Food - E-Pantry</DropdownMenuItem>
              <DropdownMenuItem>Order Food - E-Catering</DropdownMenuItem>
              <DropdownMenuItem>Cooked Food Menu</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                More
                <IconChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>ChatBot as a Service (CaaS)</DropdownMenuItem>
              <DropdownMenuItem>Link Your Aadhaar</DropdownMenuItem>
              <DropdownMenuItem>Counter Ticket Cancellation</DropdownMenuItem>
              <DropdownMenuItem>
                Counter Ticket Boarding Point Change
              </DropdownMenuItem>
              <DropdownMenuItem>Forgot Account Details?</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>At Stations</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Wi-Fi Railway Stations</DropdownMenuItem>
                  <DropdownMenuItem>Battery Operated Cars</DropdownMenuItem>
                  <DropdownMenuItem>E-wheelchair</DropdownMenuItem>
                  <DropdownMenuItem>Retiring Room</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
