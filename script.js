let pageNumber = 0;

const h2 = document.querySelector('h2');
const nextTag = document.querySelector('.next');
const previousTag = document.querySelector('.prev');
const randomTag = document.querySelector('.random');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

const pages = [{
    copy: 'a Brooklyn-based graphic designer',
    background: "#edc7a9",
    circle: "#3e78ed"
  },
  {
    copy: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47"
  },
  {
    copy: 'looking for a job at the start of October',
    background: "#d3c7f3",
    circle: "#f7fe00"
  },
  {
    copy: `letting you <a href="pdf.pdf">download her PDF</a>`,
    background: "#faffb8",
    circle: "#b472e6"
  },
]

const next = function() {
  pageNumber++;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  };

  updateSection();
};

const previous = function() {
  pageNumber--;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  };

  updateSection();
};

const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length);

  updateSection();
};

const updateSection = function() {
  h2.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

nextTag.addEventListener("click", function() {
  next();
});

previousTag.addEventListener("click", function() {
  previous();
});

randomTag.addEventListener("click", function() {
  random();
});

document.addEventListener("keyup", function (event) {
  console.log(event);

  if (event.key == 'ArrowRight') {
    next();
  } else if (event.key == 'ArrowLeft') {
    previous();
  } else if (event.key == ' ') {
    random();
  };
});
