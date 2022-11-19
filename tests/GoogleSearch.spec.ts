//import this library on all .spec.ts file for you to use playwright command
import { test, expect } from '@playwright/test';

test('test',async ({page}) => {
   //navigate to google home
   await page.goto('https://www.google.com')
   //enter a keyword on search field
   await page.locator("xpath=//*[@name='q']").fill('cars')

   //click on submit
   await page.keyboard.press('Enter')
   //below code isn't working because it's hidden so use above keyboard command
   //await page.locator("xpath=//*[@name='btnK']").nth(0).fill('Enter')

   //set some sleep statment
   await page.waitForTimeout(3000)
   //capture the test and print out the search number
   let searchResult = await page.locator("xpath=//*[@id='result-stats']").textContent()
   //print out the result
   //console.log("Search Result: " + searcResult)
   let arrayResult = searchResult.split(" ")
   console.log("Search Result: " + arrayResult[1])

})//end of test
