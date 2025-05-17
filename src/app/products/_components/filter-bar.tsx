"use client";

import * as React from "react";
import { useTranslations } from "@/shared/modules/i18n/use-translations.tsx";
import { Input } from "@/shared/components/ui/input.tsx";
import { Label } from "@/shared/components/ui/label.tsx";

export type FilterBarProps = {
  searchText: string;
  onSearchTextChange: (text: string) => void;
};

export function FilterBar(props: FilterBarProps) {
  const { t } = useTranslations();

  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-end p-4 border rounded-lg bg-card">
      <div className="md:flex-5/12 flex flex-col gap-2">
      </div>

      <div className="md:flex-7/12 flex flex-col gap-2">
        <Label htmlFor="search-text" className="font-semibold">
          {t("Search", "Search")}
        </Label>
        <Input
          id="search-text"
          type="text"
          placeholder={t("Products", "SearchProductsPlaceholder")}
          value={props.searchText}
          onChange={(e) => props.onSearchTextChange(e.target.value)}
          className="h-10"
        />
      </div>
    </div>
  );
}
