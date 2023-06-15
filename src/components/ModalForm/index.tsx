import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { AddItem } from "../AddItem";
import { FormEntryAddCategory } from "../FormEntry/FormEntryAddCategory";
import { FormEntryAddItem } from "../FormEntry/FormEntryAddItem";

export function ModalForm() {
  const {categories} = useContext(CategoriesContext)

  const [hasCategories, setHasCategories] = useState(false)


  useEffect(() => {
    setHasCategories(!!categories.length)
  }, [categories])


  return (
    <>
      <FormEntryAddItem /> 
      <FormEntryAddCategory />
      <AddItem hasCategory={hasCategories} />
    </>
  )
}