import {
  IconBeach,
  IconBuilding,
  IconBus,
  IconChartLine,
  IconMountain,
  IconPhoto,
  IconPlane,
  IconToolsKitchen2,
  IconTrain,
  IconTrainFilled,
} from "@tabler/icons-react";
import ServiceIconItem from "./service-icon-item";

const services = [
  { label: "Flights", icon: IconPlane },
  { label: "Hotels", icon: IconBuilding },
  { label: "Rail Dhristi", icon: IconChartLine },
  { label: "E-Catering", icon: IconToolsKitchen2 },
  { label: "Buses", icon: IconBus },
  { label: "Holiday Packages", icon: IconBeach },
  { label: "Tourist Train", icon: IconTrainFilled },
  { label: "Hill Railways", icon: IconMountain },
  { label: "Charter Train", icon: IconTrain },
  { label: "Gallery", icon: IconPhoto },
];

export default function OtherServices() {
  return (
    <div className="space-y-8">
      <h2 className="text-center font-semibold text-2xl">
        Find a service suitable for you here
      </h2>
      <div className="grid grid-cols-5 items-center justify-center gap-x-2 gap-y-8">
        {services.map((service) => (
          <ServiceIconItem
            icon={service.icon}
            key={service.label}
            label={service.label}
          />
        ))}
      </div>
    </div>
  );
}
