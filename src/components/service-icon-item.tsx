import type React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

type Props = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function ServiceIconItem({ label, icon: Icon }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Button className="size-20" size="icon-lg" variant="outline">
        <Icon className="size-10" />
      </Button>
      <Label>{label}</Label>
    </div>
  );
}
