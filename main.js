console.log("hello");

const destinationCards = [
    {
        title: "Maui, Hawaii",
        id: 1,
        image: "images/maui.jpg",
        description: "Maui is an island in the Central Pacific, part of the Hawaiian archipelago. Sprawling Haleakala National Park encompasses the island’s highest peak, volcanic Haleakala, as well as the pools and waterfalls of Ohe’o Gulch, accessed via scenic, winding Hana Highway. The island's 30 miles of beaches include golden-crescent Kapalua, sheltered from strong currents by lava-rock promontories."
    },
    {
        title: "Moab, UT",
        id: 2,
        image: "images/moab.jpg",
        description: "Moab is a city in eastern Utah. It’s a gateway to massive red rock formations in Arches National Park. Southwest, Canyonlands National Park features mesas and buttes carved by the Green and Colorado rivers, plus Native American rock art. Dinosaur tracks can be found at sites like Bull Canyon Overlook and Copper Ridge. In the city, collections at the Museum of Moab include dinosaur bones and archaeological artifacts."
    },
    {
        title: "Grand Tetons, WY",
        id: 3,
        image: "images/tetons.jpg",
        description: "Grand Teton National Park is in the northwest of the U.S state of Wyoming. It encompasses the Teton mountain range, the 4,000-meter Grand Teton peak, and the valley known as Jackson Hole. It’s a popular destination in summer for mountaineering, hiking, backcountry camping and fishing, linked to nearby Yellowstone National Park by the John D. Rockefeller, Jr. Memorial Parkway."
    },
    {
        title: "NYC, NY",
        id: 4,
        image: "images/nyc.jpg",
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square."
    },
    {
        title: "Napa, CA",
        id: 5,
        image: "images/napa.jpg",
        description: "Napa is the seat of Napa County, California, in the heart of the Napa Valley wine region. Its downtown is known for late-1800s and early-1900s architecture, a riverfront promenade with shops and restaurants, and an arts scene anchored by the Napa Valley Opera House. The Oxbow Public Market houses a farmer's market and cheese shop, and the Napa Valley Wine Train visits area wineries via vintage Pullman cars."
    },
    {
        title: "Denver, CO",
        id: 6,
        image: "images/denver.jpg",
        description: "Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown."
    },
];

const writeToDom = (string, id) => {
    const writeTo =  document.getElementById(id)
    writeTo.innerHTML = string;
};

const destinationCardBuilder = (destinationCardArray) => {
    let destinationString = "";
    destinationCardArray.forEach((destination) => {
        destinationString += `<div class="destination-card">`;
        destinationString +=    `<h2>${destination.title}</h2>`;
        destinationString +=    `<img src="${destination.image}" alt="">`;
        destinationString +=    `<p>${destination.description}</p>`;
        destinationString +=    `<textarea id="${destination.id}" rows="15" cols="50"></textarea>`;
        destinationString +=    `<button class="submit" type="button">Submit</button>`;
        destinationString += `</div>`;
    });
    writeToDom(destinationString, "destination-holder");
}

destinationCardBuilder(destinationCards);

const diaryEntryCardBuilder = (e) => {
    if (e.target.type === "button") {
        const destTitle = e.target.parentNode.children[0].innerHTML;
        const destDiary = e.target.parentNode.children[3].value;
        //const destId = e.target.parentNode.children[3].id;
        diaryEntry(destTitle, destDiary);
    }
}

const diaryClick = () => {
    document.getElementById("destination-holder").addEventListener("click", diaryEntryCardBuilder);
}

diaryClick();

const diaryEntry = (destTitle, destDiary) => {

        let diaryString = "";
        // let diaryEntries = diaryString += diaryString;
        diaryString += `<div class="diary">`;
        diaryString +=     `<div class="diary-title">`;
        diaryString +=         `<h2>${destTitle}</h2>`;
        diaryString +=      `</div>`;
        diaryString +=     `<p>${destDiary}</p>`;
        diaryString += `</div>`;

        writeToDom(diaryString, "diary-holder");
        //writeToDom(diaryEntries, destId);
}



const diaryEntries = diaryEntry += diaryEntry;