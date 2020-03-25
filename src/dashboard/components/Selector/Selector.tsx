import React, { useCallback } from "react";
import { Card, Button, H5, Divider } from "@blueprintjs/core";
import { classes as merge } from "typestyle";

import * as classes from "./Selector.styles";

interface ISelectorItem {
  id: string;
  name: string;
}

interface ISelectorProps<T extends ISelectorItem> {
  items: T[];
  selectedItem: T | null;
  onChange: (item: T) => unknown;
  className?: string;
  label?: string;
}

export function Selector<T extends ISelectorItem>(props: ISelectorProps<T>) {
  const { items, selectedItem, className, onChange, label } = props;

  const selectPreviousItem = useCallback(() => {
    onChange(getPreviousItem(items, selectedItem));
  }, [items, selectedItem, onChange]);

  const selectNextItem = useCallback(() => {
    onChange(getNextItem(items, selectedItem));
  }, [items, selectedItem, onChange]);

  return (
    <Card className={merge(classes.selector, className)}>
      {label && (
        <H5 className={classes.label}>
          {label}
          <Divider />
        </H5>
      )}
      <div className={classes.controls}>
        <Button icon="chevron-left" onClick={selectPreviousItem} />
        <span>{selectedItem ? selectedItem.name : "Загрузка..."}</span>
        <Button icon="chevron-right" onClick={selectNextItem} />
      </div>
    </Card>
  );
}

function getPreviousItem<T extends ISelectorItem>(items: T[], selectedItem: T | null) {
  if (!selectedItem) return items[0];
  const selectedItemIndex = items.findIndex(item => item.id === selectedItem.id);
  return selectedItemIndex === 0 ? items[items.length - 1] : items[selectedItemIndex - 1];
}

function getNextItem<T extends ISelectorItem>(items: T[], selectedItem: T | null) {
  if (!selectedItem) return items[0];
  const selectedItemIndex = items.findIndex(item => item.id === selectedItem.id);
  return selectedItemIndex === items.length - 1 ? items[0] : items[selectedItemIndex + 1];
}
