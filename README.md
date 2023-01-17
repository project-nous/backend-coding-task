## Nous backend coding challenge

Hey 👋, congratulations on getting to coding challenge stage. This task resembles what we do here at Nous so it should give you a good idea of the problems we are dealing with. In this task you will be given a number of datasets. The task involves aggregating the datasets and resolving conflicts between them. You are free to do this exercise in any programming language, however, we wrote some scaffolding in TypeScript, should you choose this language.

### Exercise

Nous gathers data about households' mortgages from 3 different sources with varied quality. We have to combine these datasets, resolving conflicts between them with defined rules, to create a collated dataset that represents our best guess at the true mortgages held by households.

The datasets available to us:

a) Data from users' bank accounts, accessed via Open Banking, found in `householdOpenBankingMortgageData.json`

b) Data that has been manually inputted by users in our app, found in `householdManuallyInputtedMortgageData.json`

c) Data that comes from user interaction with one of our mortgage calculator tools, found in `householdMortgageCalculatorData.json`

Each dataset may contain different data, according to what is available from the different sources.

Your task is to write code to resolve the collated mortgage dataset for all households.

1. The function `resolveProviderName` (found in `index.ts`) currently returns the name of the mortgage provider if it is the same in all datasets. We would like to extend this function to implement the rules we have defined to resolve conflicts in the mortgage provider name between the 3 datasets. The rules are as follows:
   - If there is one name that is unambiguously the most common provider name in all datasets, the function should return this name
   - If there is not one name that is the most common, then the provider name in `householdManuallyInputtedMortgageData` takes precedence over that in `householdOpenBankingMortgageData`, which takes precedence over that in `householdMortgageCalculatorData`

2. Write another function to resolve the monthly mortgage spend for any given household according to the following rules:
   - Data from Open Banking takes precedence over data that has been manually inputted in our app
   - However, if the monthly spend in the Open Banking dataset differs to that in the manual input dataset by more than 10%, then this order of preference is reversed

3. Write another function to resolve the outstanding loan amount for any given household according to this rule:
   - Data from manual input takes precedence over data from our mortgage calculator tool

4. Write a function to calculate the decrease in the outstanding loan amount of the next 12 months under the following assumption:
   - 88% of the monthly spend on a mortgage goes towards paying off the loan

Please write your solution as you would normally write production ready software.

Good luck!
