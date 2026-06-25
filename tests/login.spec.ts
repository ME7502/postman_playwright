import {expect, test } from '@playwright/test'


test("inscription valide",{tag:"@SignUp"}, async function ({page}){
// on vas vistter le site
await page.goto("https://thrundrz.fr/gestion/")

// cliquer sur la bouton creer un compt
await page.getByRole("link", {name:"Création du compte"}).click()

// verifier 
await expect(page).toHaveURL(/newcompte/)

// remplir un formulair avec des infos valid


await page.getByRole("textbox", {name:"Jean Dupont"}).fill("yahia prt")
let randomEmail = `Mouad${Date.now()}@gmail.com`
await page.getByPlaceholder("contact@societe.com").fill(randomEmail)
// +33 123467890
let randomNumber = "+33 6 12 34 56 " + (Math.floor(Math.random()* 90)  + 10)

await page.getByPlaceholder("+33 6 12 34 56 78").fill(randomNumber)

let randomSeriet =  "1234567891" + (Math.floor(Math.random()* 9000)  + 1000)

await page.getByPlaceholder("12345678901234").fill(randomSeriet)


//await page.locator("[data-test='shopping-cart-link']").click()
 
///await page.locator("input [ type = 'password']").fill("]DS+C@94!yUhxjd@3")
await page.getByPlaceholder("********").fill("]DS+C@94!yUhxjd@3")

// cliquer sur la bouton inscrir
await page.getByRole("button", {name: "S'inscrire"}).click()

//verifier URL espcae client

await expect(page).toHaveURL(/EspaceClient/)


} )

test("US-02 : Connexion",{tag:"@Login"}, async ({page}) => {
    // Visiter la 1ère page ...
    await page.goto("https://thrundrz.fr/gestion/")
    
    // cliquer sur la bouton creer un compt
    await page.getByRole("link", {name:"Se connecter"}).click()

    // Email 
    await page.locator("#email").fill("yahia2248@gmail.com")
    await page.locator("#password").fill("]DS+C@94!yUhxjd@3")

    await page.getByRole("button", {name: "Se connecter"}).click()
    await expect(page).toHaveURL(/EspaceClient/)
    
})

