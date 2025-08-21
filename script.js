// A simple data source for the XIONBassadors
const xionBassadors = [
    {
        name: "ACRis",
        role: "Elect", // Correct rank from the XION program
        bio: "A Singer Elect and Moderator from The Philippines.",
        avatar: "https://imgur.com/a/xM4spPr",
        socials: {
            twitter: "https://x.com/itsmeacris",
            discord: "@itsmeacris"
        }
    },
    {
        name: "Clara 'Crusader' Jones",
        role: "Crusader", // Correct rank from the XION program
        bio: "Focused on community building and fostering a welcoming environment for newcomers.",
        avatar: "https://via.placeholder.com/150",
        socials: {
            twitter: "https://twitter.com/anotherhandle",
            discord: "anotherdiscordhandle#5678"
        }
    },
    // Add more objects for other Elects and Crusaders
    {
        name: "David 'Decentralized' Lee",
        role: "Elect",
        bio: "A technical contributor who helps with documentation and testing new features.",
        avatar: "https://via.placeholder.com/150",
        socials: {
            twitter: "https://twitter.com/devleed",
            discord: "devleed#9012"
        }
    }
];

const ambassadorWall = document.getElementById('ambassador-wall');

function createAmbassadorCard(ambassador) {
    const card = document.createElement('div');
    card.classList.add('ambassador-card');

    card.innerHTML = `
        <img src="${ambassador.avatar}" alt="${ambassador.name}'s profile picture">
        <h3>${ambassador.name}</h3>
        <p class="role">${ambassador.role}</p>
        <p>${ambassador.bio}</p>
        <div class="socials">
            ${ambassador.socials.twitter ? `<a href="${ambassador.socials.twitter}" target="_blank">Twitter</a>` : ''}
            ${ambassador.socials.discord ? `<span class="discord">Discord: ${ambassador.socials.discord}</span>` : ''}
        </div>
    `;

    return card;
}

// Loop through the data and add each card to the wall
xionBassadors.forEach(ambassador => {
    const card = createAmbassadorCard(ambassador);
    ambassadorWall.appendChild(card);
});
