"use client";

import React, { useState } from "react";
import { Select } from "@/common";
import { useMakes, useYears } from "@/hooks";

export default function Home() {
  const { makeOptions, loading } = useMakes();
  const { yearOptions } = useYears();

  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  return (
    <main className="flex flex-col gap-8 items-center p-10">
      <h1 className="text-3xl font-semibold">Car Dealer</h1>
      <p>Please select a vehicle make and model year to proceed.</p>
      <div className="space-y-4">
        {loading ? (
          <p>Loading makes...</p>
        ) : (
          <Select
            label="Select Vehicle Make:"
            value={selectedMake}
            onChange={setSelectedMake}
            options={makeOptions}
          />
        )}

        <Select
          label="Select Model Year:"
          value={selectedYear}
          onChange={setSelectedYear}
          options={yearOptions}
        />
      </div>
    </main>
  );
}
