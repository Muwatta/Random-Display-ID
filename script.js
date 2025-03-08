const delegates = [
  {
    position: 'Student',
    name: 'Abdullahi Musliudeen Oladipupo',
    school: 'Algorise Tech Explorers',
    level: 'Professional',
    ambition: 'Software Developers & Convener',
    image: './images/profile.jpg',
  },
  {
    position: 'Student',
    name: 'Nda Yunusa Isa',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Developers & Automation',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Nda',
  },
  {
    position: 'Student',
    name: 'Muhammad-Baba',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Developers & Finance',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Muhammad-Baba',
  },
  {
    position: 'Student',
    name: 'Nafisa Hamza Aliyu',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Developers & Robotic',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Nafisa',
  },
  {
    position: 'Student',
    name: 'Hawau Ejura Muhammad',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Developers & Geologist',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Hawau',
  },
  {
    position: 'Student',
    name: 'Sumaiya Mustapha',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Developmemt & AI-ML',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Sumaiya',
  },
  {
    position: 'Student',
    name: 'Hafsah Cisse',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Development & AI-ML',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Hafsah',
  },
  {
    position: 'Student',
    name: 'Auf',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Development & AI-ML',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Auf',
  },
  {
    position: 'Student',
    name: 'AlGadama',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Development & AI-ML',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=AlGadama',
  },
  {
    position: 'Student',
    name: 'Ammar Khamis',
    school: 'Algorise Tech Explorers',
    level: 'Beginners',
    ambition: 'Software Development & AI-ML',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Ammar',
  },
];

function randomStudent(delegates) {
  const shuffledDelegates = [...delegates];

  for (let i = shuffledDelegates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDelegates[i], shuffledDelegates[j]] = [
      shuffledDelegates[j],
      shuffledDelegates[i],
    ];
  }

  const renderOfficial = shuffledDelegates[0];

  document.getElementById('officialDisplay').innerHTML = `
    <img src="${renderOfficial.image}" alt="${renderOfficial.name}" class="profile-image">
    <h2 id="render">${renderOfficial.position}</h2>
    <p><span>Name:</span> ${renderOfficial.name}</p>
    <p><span>School:</span> ${renderOfficial.school}</p>
    <p><span>Years in office:</span> ${renderOfficial.level}</p>
    <p><span>Ambition:</span> ${renderOfficial.ambition}</p>
  `;
}
