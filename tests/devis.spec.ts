import {test, expect} from "@playwright/test";

test("US-05 : Création d'un devis @Devis", async ({page}) => {
    // Visiter la 1ère page ...
    await page.goto("https://thrundrz.fr/gestion/")
    
    // cliquer sur la bouton creer un compt
    await page.getByRole("link", {name:"Se connecter"}).click()

    // Email 
    await page.locator("#email").fill("yahia2248@gmail.com")
    await page.locator("#password").fill("]DS+C@94!yUhxjd@3")

    await page.getByRole("button", {name: "Se connecter"}).click()
    await expect(page).toHaveURL(/EspaceClient/)

    await page.getByRole("button", {name: "Devis"}).click()
    await page.getByRole("button", {name: "Ajouter un devis"}).click()
    await page.getByRole("combobox").nth(0).selectOption("10")
    await page.getByRole("combobox").nth(1).selectOption("accepte")
    let date_=new Date()
    let date_2=date_.setMonth(date_.getMonth()+1)
    await page.getByRole("textbox").nth(0).fill(date_.toISOString().split("T")[0])
    await page.getByRole("textbox").nth(1).fill(date_.toISOString().split("T")[0])
    
    //cliquer sur le bouton rajouter une ligne
    await page.getByRole("button", {name:"Ajouter une ligne"}).click();
    let counter = 0;

    counter ++;

    
    await page.locator("table tbody tr textarea").nth(0).fill("est");
    let random_qte1 = Math.floor(Math.random()*10)+1;
    await page.locator("table tbody tr input[min='1']").nth(0).fill(String(random_qte1));
    
    await page.locator("table tbody tr td input[type='text']").nth(0).fill("p");

    //prix produit 1
    let prix_produit1 = Math.floor(Math.random()*3801)+200;
    await page.locator("table tbody tr td input[min='0']").nth(0).fill(String(prix_produit1));
    //tva produit 1
    let tva_produit1 = Math.random()>0.5?"10":"20"
    await page.locator("table tbody tr td select").nth(0).selectOption(tva_produit1);

    expect((await page.locator("table tbody tr td").nth(6)
    .innerText()).split("€")[0].trim().split(".")[0]).toEqual(String(prix_produit1*random_qte1));


    
})

