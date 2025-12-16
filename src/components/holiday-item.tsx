import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

type HolidayItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function HolidayItem({
  image,
  title,
  description,
}: HolidayItemProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="w-full overflow-hidden">
        <img
          alt={title}
          className="h-auto w-full object-contain"
          height={400}
          src={image}
          width={800}
        />
      </div>
      <CardContent className="space-y-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
        <Button variant="ghost">
          Read More
          <IconArrowRight />
        </Button>
      </CardContent>
    </Card>
  );
}
