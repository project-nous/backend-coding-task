import {
  getHouseholdManuallyInputtedMortgageData,
  getHouseholdMortgageCalculationData,
  getHouseholdOpenBankingMortgageData,
} from "./dataLayer";

export function resolveProviderName(householdId: string) {
  const openBankingMortgageData =
    getHouseholdOpenBankingMortgageData(householdId);
  const mortgageCalculatorData =
    getHouseholdMortgageCalculationData(householdId);
  const manuallyInputtedMortgageData =
    getHouseholdManuallyInputtedMortgageData(householdId);

  if (
    openBankingMortgageData?.providerName ===
      mortgageCalculatorData?.providerName &&
    mortgageCalculatorData?.providerName ===
      manuallyInputtedMortgageData?.providerName
  ) {
    return openBankingMortgageData?.providerName;
  }
}

function resolveMonthlySpend(householdId: string) {
  // TODO
}
