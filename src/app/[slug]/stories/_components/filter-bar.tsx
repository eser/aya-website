import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group.tsx";

import styles from "./filter-bar.module.css";

type FilterMap = Record<string, string>;

export interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  mapping: FilterMap;
}

export const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, setActiveFilter, mapping }) => {
  return (
    <div className={styles.filterBar}>
      <ToggleGroup type="single" variant="outline" value={activeFilter}>
        {Object.entries(mapping).map(([type, label]) => (
          <ToggleGroupItem
            key={type}
            value={type}
            aria-label={`Toggle ${type}`}
            onClick={() => setActiveFilter(type)}
            className={activeFilter === type ? styles.active : ""}
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};
