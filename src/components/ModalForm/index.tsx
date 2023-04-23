import { useContext } from "react";
import { AddItem } from "../AddItem";
import { FormEntry } from "../FormEntry";
import { ModalContext } from "../../context/ModalContext";

export function ModalForm() {
  const {isAddItem} = useContext(ModalContext)

  return (
    <>
      {isAddItem ? <FormEntry /> : null}
      <AddItem />
    </>
  )
}