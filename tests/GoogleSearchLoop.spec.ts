//import this library on all .spec.ts file for you to use playwright command
import { test, expect } from '@playwright/test';

test('test',async ({page}) => {
    //set arrayList
    let cars = []
    cars.push("Honda")
    cars.push("BMW")
    cars.push("Mercedez")

    //let cars = ["BMW","Mercedes","Honda"]
   //cars.push('Audi')

    //set page size maximize
    page.setViewportSize({width: 1440, height: 820})

    //set for loop
    for(let i=0; i<cars.length; i++){

    
   //navigate to google home
   await page.goto('https://www.google.com')
   //enter a keyword on search field
   await page.locator("xpath=//*[@name='q']").fill(cars[i])

   //click on submit
   await page.keyboard.press('Enter')
   //below code isn't working because it's hidden so use above keyboard command
   //await page.locator("xpath=//*[@name='btnK']").nth(0).fill('Enter')

   //set some sleep statment
   await page.waitForTimeout(3000)
   //capture the test and print out the search number
   let searchResult = await page.locator("xpath=//*[@id='result-stats']").textContent({timeout: 5000})
   //print out the result
   //console.log("Search Result: " + searcResult)
   let arrayResult = searchResult.split(" ")
   console.log("Search Result: " + cars[i] + arrayResult[1])
    }
})//end of test
