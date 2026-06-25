import {expect, test } from '@playwright/test'


test("US-04 : Création d'un client",{tag:"@Client"}, async function ({page}){
    await page.goto("https://thrundrz.fr/gestion/")
    
    // cliquer sur la bouton creer un compt
    await page.getByRole("link", {name:"Se connecter"}).click()

    // Email 
    await page.locator("#email").fill("yahia2248@gmail.com")
    await page.locator("#password").fill("]DS+C@94!yUhxjd@3")

    await page.getByRole("button", {name: "Se connecter"}).click()
    //clique sur profil
    await page.getByRole("button", {name: "Clients"}).click()

    //appuyer sur client
    await page.getByRole("button", {name: "Ajouter un client"}).click()

    //
    await page.getByRole("textbox", {name:"Nom de l'entreprise"}).fill("Entreprise 1")
    await page.getByRole("button", {name:"Ajouter le client"}).click()
    
 await expect(page.locator("[role='alert']",{hasText:"Client ajouté avec succès !"})).toBeVisible()
    
})