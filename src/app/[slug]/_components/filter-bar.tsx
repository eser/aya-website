import * as React from "react";

import type { StoryKind } from "@/shared/modules/backend/stories/types.ts";
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group.tsx";

import styles from "./filter-bar.module.css";

export type FilterKeyType = StoryKind | "all";

export interface FilterBarProps {
  activeFilter: FilterKeyType;
  setActiveFilter: (filter: FilterKeyType) => void;
  mapping: Record<FilterKeyType, string>;
}

export function FilterBar(props: FilterBarProps) {
  return (
    <div className={styles.filterBar}>
      <ToggleGroup type="single" variant="outline" value={props.activeFilter}>
        {Object.entries(props.mapping).map(([type, label]) => (
          <ToggleGroupItem
            key={type}
            value={type}
            aria-label={`Toggle ${type}`}
            onClick={() => props.setActiveFilter(type as FilterKeyType)}
            className={props.activeFilter === type ? styles.active : ""}
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
