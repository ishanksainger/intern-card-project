//ShadCN Card Component
import * as React from "react";

import { cn } from "../../lib/utils";
//Main Card Component
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-fit h-fit sm:w-[537px] sm:h-[220px]  bg-[#E9F3FE] rounded-[25px] m-auto shadow-2xl bg-gradient-to-r cursor-pointer hover:opacity-85",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";
// Card Content 
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full flex flex-col justify-center items-center gap-6 sm:flex-row sm:gap-4 p-4 sm:flex sm:justify-between  sm:items-center pl-2 pr-2 h-full",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

//exporting Card and cardContent for usage 
export { Card, CardContent };
