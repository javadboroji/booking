import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface formmItem {
  label: string;
  value: string | number;
 
}
type DropProps = {
  name:string;
  value:string ,
  onChange:(val:string)=>void
  items: formmItem[];
  initialValue?:string | number;
  selectWidth?:string,
  placeholder?:string
};



const Drop: React.FC<DropProps> = ({ items ,initialValue ,onChange , value,placeholder , selectWidth="180px"}) => {
  return (
    <Select value={value}  onValueChange={(val)=>onChange(val)  }>
      <SelectTrigger className={`w-[${selectWidth}]`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>


      <SelectContent >
        {items?.map((item) => {
          return (
            <SelectItem key={item.value} value={item.value as string}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>


    </Select>
  );
};

export default Drop;
