"use client";
import { sortFilter } from "@/app/Data/sortFilter";
import Drop from "@/components/custom/Drop/Drop";
import React, { useCallback, useState } from "react";

function Sort() {
  const covert = useCallback(() => {
    const items = sortFilter.map((item) => ({
      value: item.id,
      label: item.title,
    }));
    return items;
  }, []);
  const [sort, setSort] = useState("1");
  const sortHandler = (val: string) => {
    setSort(val);
  };
  return (
    <div className="lg:w-1/6 md:w-1/3 ">
      <Drop
        name="sort"
        items={covert()}
        value={sort}
        onChange={(val) => sortHandler(val)}
      />
    </div>
  );
}

export default Sort;
