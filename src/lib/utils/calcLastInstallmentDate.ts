export function calcLastInstallmentDate(numberOfInstallments: number) {
  if (numberOfInstallments <= 0) {
    return { month: 3000, year: 3000 };
  }

  const getDate = new Date();
  const actualMonth = getDate.getMonth();
  const actualYear = getDate.getFullYear();

  let lastInstallmentMonth = actualMonth + numberOfInstallments;
  let lastInstallmentYear = actualYear;

  if (lastInstallmentMonth > 11) {
    lastInstallmentMonth -= 12;
    lastInstallmentYear += 1;
  }

  return { month: lastInstallmentMonth, year: lastInstallmentYear };
}