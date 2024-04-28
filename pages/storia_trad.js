// Oggetto contenente le traduzioni e le scritte per la pagina.
const pagina = {
    italiano: {
        chiSiamo: "Chi siamo",
        doveTrovarci: "Dove trovarci",
        home: "Home",
        stringhe:  ["Alimentari","Salumi","Panini", "Snack", "Bevande", "Prodotti esteri"],
        titoloFar: "Il mini-market",
        titoloFar2: "Dove siamo",
        prodottiEsteri: "Prodotti Esteri" ,
        ubi: "Ubicazione geografica",
        orari: "Orari di apertura",
        giorni: ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],
        telefono: "Recapito telefonico",
        telefonoFooter: "Recapito telefonico",
        emailFooter: "Email",
        socialMediaFooter: "Social media",
        aboutUs: "Mini Market è una piccola attività locale situata nel cuore della bellissima Sorrento. Il negozio è gestito da uno staff diligente che mette al primo posto il cliente, dando la priorità alla qualità dei prodotti e alla convenienza dei prezzi. Abbiamo una larga scelta di prodotti, tra bevande durante le più calde giornate estive oppure prodotti di salumeria come panini per i vostri pic-nic o eventuali snack adatti alle vostre attività ricreative tutto a un prezzo perfettamente accessibile; abbiamo anche prodotti provenienti dall'Ucraina, Polonia, Moldavia e Romania. Il luogo è semplice da raggiungere e lo staff è molto accogliente e disponibile. Venite a trovarci! "
    },
    inglese: {
        chiSiamo: "About us",
        doveTrovarci: "Location",
        home: "Home",
        stringhe: ["Food","Meat","Sandwiches", "Snacks","Drinks", "Foreign Products"],
        titoloFar: "The market",
        titoloFar2: "Where you can find us",
        prodottiEsteri: "Foreign Products" ,
        ubi: "Location",
        orari: "Opening time",
        giorni: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        telefono: "Phone number",
        telefonoFooter: "Phone number",
        emailFooter: "Email",
        socialMediaFooter: "Social media",
        aboutUs: "Mini Market is a small local business located in the heart of beautiful Sorrento. The store is managed by a hard working staff who is really concerned with the customer's satisfaction, giving priority to product quality and affordable prices. We have a wide choice of products, including drinks during the hottest summer days or delicatessen products such as sandwiches for your picnics or any snacks suitable for your recreational activities, all at a perfectly accessible price; we also have products from Ukraine, Poland, Moldova and Romania. The place is easy to reach and the staff is welcoming and helpful. Come pay us a visit!"
    },
    russo: {
        chiSiamo: "О нас",
        doveTrovarci: "Где мы",
        home: "Главная",
        stringhe: ["Еда","Мясо","Сэндвичи", "Закуски","Напитки", "Зарубежной продукции"],
        titoloFar: "О магазине",
        titoloFar2: "Где мы",
        prodottiEsteri: "Зарубежной продукции" ,
        ubi: "Расположение магазина",
        orari: "Время открытия",
        giorni: ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
        telefono: "Наш номер телефона",
        telefonoFooter: "наш номер телефона",
        emailFooter: "наш адрес эл.почты",
        socialMediaFooter: "Social media",
        aboutUs: "Мини-маркет, это маленький местный бусинесс, расположен в центр Сорренты. Наш персонал - трудолюбивый, и удовлетворение клиента наш приоритет. У нас есть широкий выбор продукции, как напитки, мясо, боутерброды, все по доступной цене; у нас есть продукции из Украины, Польши, Румынии и Молдовы. Добраться до нас легко, мы будем вам ждать!"
    },
    ucraino: {
        chiSiamo: "Про нас",
        doveTrovarci: "Де ми",
        home: "Головна",
        stringhe: ["Їжа","М'ясо","Сендвічі", "Закуски","Напої", "Зарубіжної продукції"],
        titoloFar: "Про магазину",
        titoloFar2: "Де ми",
        prodottiEsteri: "Зарубіжної продукції" ,
        ubi: "Розташування магазину",
        orari: "Час відкриття",
        giorni: ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],
        telefono: "Наш номер телефону",
        telefonoFooter: "наш номер телефону",
        emailFooter: "наша адреса эл.пошти",
        socialMediaFooter: "Social media",
        aboutUs: "Міні-маркет, це маленький місцевий бусінес, розташований у центрі Сорренти. Наш персонал - працелюбний, і задоволення клієнта є наш пріоритет. Ми маємо широкий вибір продукції, як напої, м'ясо, боутерброди, все за доступною ціною; у нас є продукції з України, Польщі, Румунії та Молдови. Дістатись до нас легко, ми будемо вам чекати!"
    },
}

function isInArray(value,array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            counter += 1; 
        } else {}
    }
    return counter 
}

// Script per cambiare lingua.
function changeLanguage(language) {
    const availableLanguages = ["italian", "english", "russian", "ukrainian"]
    let languageJSON;
    if (language === availableLanguages[0]) {
        languageJSON = pagina.italiano;
    } else if (language === availableLanguages[1]) {
        languageJSON = pagina.inglese;
    } else if (language === availableLanguages[2]) {
        languageJSON = pagina.russo;
    } else if (language === availableLanguages[3]) {
        languageJSON = pagina.ucraino;
    } 
    if (isInArray(language, availableLanguages) === 1) {
        typed.strings = languageJSON.stringhe;
        document.getElementById("chiSiamo").innerText = languageJSON.chiSiamo;
        document.getElementById("doveSiamo").innerText = languageJSON.doveTrovarci;
        document.getElementById("prodottiEsteri").innerText = languageJSON.prodottiEsteri;
        document.getElementById("chiSiamo2").innerText = languageJSON.chiSiamo;
        document.getElementById("doveSiamo2").innerText = languageJSON.doveTrovarci;
        document.getElementById("prodottiEsteri2").innerText = languageJSON.prodottiEsteri;
        document.getElementById("titoloFar").innerText = languageJSON.titoloFar;
        document.querySelector(".titoloFar2").innerText = languageJSON.titoloFar2;
        document.getElementById("orari-title").innerText = languageJSON.orari;
        document.getElementById("recapito-title").innerText = languageJSON.telefono;
        document.getElementById("ubi-title").innerText = languageJSON.ubi;
        document.getElementById("text-aboutUs").innerText = languageJSON.aboutUs;
        document.querySelector(".lunedi").innerText =  `${languageJSON.giorni[0]} - 7.30-22.00 `;
        document.querySelector(".martedi").innerText = `${languageJSON.giorni[1]} - 7.30-22.00 `;
        document.querySelector(".mercoledi").innerText = `${languageJSON.giorni[2]} - 7.30-22.00 `;
        document.querySelector(".giovedi").innerText = `${languageJSON.giorni[3]} - 7.30-22.00 `;
        document.querySelector(".venerdi").innerText = `${languageJSON.giorni[4]} - 7.30-22.00 `;
        document.querySelector(".sabato").innerText = `${languageJSON.giorni[5]} - 7.30-22.00 `;
        document.getElementById("email-footer").innerText = languageJSON.emailFooter;
        document.getElementById("phone-footer").innerText = languageJSON.telefonoFooter;
    } else {
        console.log("Language currently not yet supported / Lingua non ancora supportata.");
    }
}