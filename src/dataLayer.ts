import openBankingMortgageData from "./householdOpenBankingMortgageData.json";
import manuallyInputtedMortgageData from "./householdManuallyInputtedMortgageData.json";
import mortgageCalculatorData from "./householdMortgageCalculatorData.json";

export function getHouseholdOpenBankingMortgageData(householdId: string) {
  return openBankingMortgageData.find(
    (openBankingMortgageData) =>
      openBankingMortgageData.householdId === householdId
  );
}

export function getHouseholdManuallyInputtedMortgageData(householdId: string) {
  return manuallyInputtedMortgageData.find(
    (manuallyInputtedMortgageData) =>
      manuallyInputtedMortgageData.householdId === householdId
  );
}

export function getHouseholdMortgageCalculationData(householdId: string) {
  return mortgageCalculatorData.find(
    (mortgageCalculationData) =>
      mortgageCalculationData.householdId === householdId
  );
}
