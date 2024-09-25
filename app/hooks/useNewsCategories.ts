import newsCategoryList from "@/constants/Categories";
import { useCallback, useState } from "react";

export const useNewsCategories = () => {
  const [newsCategories, setNewsCagegories] = useState(newsCategoryList);

  const toggleNewsCategory = useCallback((id: number) => {
    setNewsCagegories((prevNewsCategories) => {
      return prevNewsCategories.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });
    });
  }, []);
  return {
    newsCategories,
    toggleNewsCategory,
  };
};
