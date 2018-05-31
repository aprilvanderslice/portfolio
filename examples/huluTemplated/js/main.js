//The specifics of each box
document.addEventListener('DOMContentLoaded', () => {
  const boxesData = [
    {
      description:'New on Hulu',
      category:'Hulu with Live TV',
      title: 'Live Sports',
      logo: 'logo',
    },
    {
      description:'Groundbreaking',
      category:'Hulu Originals',
      title: 'The Handmaid Tale',
      logo: 'logo',
    },
    {
      description:'New on Hulu',
      category:'Hulu with Live TV',
      title: 'Live Sports',
      logo: 'logo',
    },
    {
      description:'New and Classic',
      category:'Movies',
      title: 'Star Trek Beyond',
      logo: 'logo',
    },
    {
      description:'Current',
      category:'Seasons',
      title: 'This Is Us',
      logo: 'logo',
    },
    {
      description:'Exclusives',
      category:'Past Seasons',
      title: 'Scandal',
      logo: 'logo',
    },
    {
      description:'For All Ages',
      category:'Kids',
      title: 'Finding Dory',
      logo: 'logo',
    },

  ];

const boxesElement = document.querySelector("[data-js='boxes']");

//Items within each box that can be templated
boxesData.forEach((box) => {
  let boxTemplate = `
    <div>
        <p class="description">
          ${box.description}
        </p>
        <a class="category"
          href="#">
          ${box.category}
        </a>
        <div>
          <span class="title">
            ${box.title}
          </span>
          <span class="logo">
            ${box.logo}
          </span>
        </div>
      </div>
  `;

// Add template to <div> in document
    boxesElement.insertAdjacentHTML('beforeend', boxTemplate);
  });
});
