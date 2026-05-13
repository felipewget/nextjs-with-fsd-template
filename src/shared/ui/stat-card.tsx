import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardAction,
  CardFooter,
} from "./card";
import { Badge } from "./badge";
import { FC } from "react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  note?: string;
  badgeValue?: string;
}

export const StatCard: FC<StatCardProps> = ({
  title,
  description,
  note,
  value,
  badgeValue,
}) => {
  const isNumber = badgeValue && !isNaN(Number(badgeValue.replace("%", "")));
  const badgeNumber = isNumber ? Number(badgeValue.replace("%", "")) : 0;

  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>

        {badgeValue && (
          <CardAction>
            <Badge>
              {isNumber ? (
                badgeNumber > 0 ? (
                  <IconTrendingUp />
                ) : (
                  <IconTrendingDown />
                )
              ) : null}

              {badgeValue}
            </Badge>
          </CardAction>
        )}
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {description}

          {isNumber ? (
            badgeValue && badgeNumber > 0 ? (
              <IconTrendingUp className="size-4" />
            ) : (
              <IconTrendingDown className="size-4" />
            )
          ) : null}
        </div>
        {note && <div className="text-muted-foreground">{note}</div>}
      </CardFooter>
    </Card>
  );
};
