import { AddItem } from "../AddItem";
import { FormEntryAddCategory } from "../FormEntry/FormEntryAddCategory";
import { FormEntryAddItem } from "../FormEntry/FormEntryAddItem";

export function ModalForm() {
  return (
    <>
      <FormEntryAddItem /> 
      <FormEntryAddCategory />
      <AddItem />
    </>
  )
}