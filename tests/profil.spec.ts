import {expect, test } from '@playwright/test'


test("US-03 : Modification du profil entreprise @Profile", async function ({page}){
    await page.goto("https://thrundrz.fr/gestion/")
    
    // cliquer sur la bouton creer un compt
    await page.getByRole("link", {name:"Se connecter"}).click()

    // Email 
    await page.locator("#email").fill("yahia2248@gmail.com")
    await page.locator("#password").fill("]DS+C@94!yUhxjd@3")

    await page.getByRole("button", {name: "Se connecter"}).click()
    //clique sur profil
    await page.getByRole("button", {name: "Profil"}).click()
    // modifier Forme juridique
    await page.locator("[name = 'forme_juridique']").selectOption("SASU")
    //cocher les cases 10 et 20
    await page.getByRole("checkbox", {name: "10%"}).check()
    await page.getByRole("checkbox", {name: "20%"}).check()

    //clique sur sauvgarder
    await page.getByRole("button", {name: "Sauvegarder"}).click()

    //verifier c été bien modifier
    await expect(page.locator("[role='alert']",{hasText:"Profil mis à jour avec succès"})).toBeVisible()
    
})