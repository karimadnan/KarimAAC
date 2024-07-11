import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@karimACC/app/ui/components/alert";
import { Button } from "@karimACC/app/ui/components/button";
import { cn } from "@karimACC/app/util/common";
import Image from "next/image";
import AccountOverviewActions from "./account-overview-actions";

export interface PremiumAlertProps {
  premiumDays: number;
}

export default function PremiumAlert({ premiumDays }: PremiumAlertProps) {
  const isPremium = premiumDays > 0;
  return (
    <div className="p-5">
      <Alert className="p-2">
        <div className="flex items-center">
          <Image
            className="mx-2"
            src={
              isPremium
                ? "/account-status-green.gif"
                : "/account-status-red.gif"
            }
            alt="account-status-gem"
            height={52}
            width={52}
          />
          <div>
            <AlertTitle
              className={cn(
                "text-xl font-extrabold",
                isPremium ? "text-green-500" : "text-red-500"
              )}
            >
              {isPremium ? "Premium Account" : "Free Account"}
            </AlertTitle>
            <AlertDescription>
              (Balance of premium time: {premiumDays} days)
            </AlertDescription>
          </div>
          <div className="ml-auto flex flex-col gap-1">
            <AccountOverviewActions isPremium={isPremium} />
          </div>
        </div>
      </Alert>
    </div>
  );
}
