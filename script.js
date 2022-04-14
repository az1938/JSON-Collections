let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "You & I",
  "favorite_color" : "white",
  "term" : "Fall 2020",
  "course" : "Communications Lab",
  "links" : ["Blog Documentation","Google Slides"],
  "Picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg"
}

var randomIndex = Math.floor(Math.random() * myJSON["links"].length);

printToPage("Here are some projects that I have made in the past two years...");

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "YOU & I",
    "favorite_color" : "white",
    "term": "Fall 2020",
    "course" : "Communications Lab",
    "type" : "Individual Project",
    "links" : ["Blog Documentation","Google Slides"],
    "Picture_url": "img1.jpg"
  },
  {
    "title" : "GOOD OLD DAYS",
    "favorite_color" : "white",
    "term": "Fall 2020",
    "course" : "Communications Lab",
    "type" : "Individual Project",
    "links" : ["Blog Documentation","Google Slides"],
    "Picture_url": "img2.jpg"
  },{
    "title" : "SOUNDSCAPE",
    "favorite_color" : "white",
    "term": "Fall 2020",
    "course" : "Communications Lab",
    "type" : "Individual Project",
    "links" : ["Blog Documentation","Google Drive File"],
    "Picture_url": "img3.jpg"
  },{
    "title" : "LIFE'S PATHWAYS",
    "favorite_color" : "white",
    "term": "Fall 2020",
    "course" : "Communications Lab",
    "type" : "Group Final Project",
    "links" : ["Blog Documentation","Google Slides"],
    "Picture_url": "img4.jpg"
  },{
    "title" : "PLEASE YOUR CAT !",
    "favorite_color" : "white",
    "term": "Spring 2021",
    "course" : "Code! & Code! 2",
    "type" : "Individual Final Project",
    "links" : ["p5.js Draft","p5.js Final Version"],
    "Picture_url": "img5.jpg"
  },{
    "title" : "CONSTANT OUTPUT",
    "favorite_color" : "white",
    "term": "Spring 2021",
    "course" : "Ideation & Prototyping",
    "type" : "Weekly Assignments",
    "links" : ["Blog Documentation","Google Drive Folder"],
    "Picture_url": "img6.jpg"
  },{
    "title" : "REFRESH BOOTH",
    "favorite_color" : "white",
    "term": "Spring 2021",
    "course" : "Ideation & Prototyping",
    "type" : "Group Midterm Project",
    "links" : ["Google Slides I: Research","Google Slides II: Prototype"],
    "Picture_url": "img7.jpg"
  },{
    "title" : "SPYDAR",
    "favorite_color" : "white",
    "term": "Spring 2021",
    "course" : "Ideation & Prototyping",
    "type" : "Group Final Project",
    "links" : ["Google Slides","Figma File"],
    "Picture_url": "img8.jpg"
  },{
    "title" : "HEARING AID REFORMATION",
    "favorite_color" : "white",
    "term": "Fall 2021",
    "course" : "Digital Fabrication",
    "type" : "Group Final Project",
    "links" : ["Instructables Documentation","Google Slides"],
    "Picture_url": "img9.jpg"
  },{
    "title" : "RECYCLED PLASTIC FLOWER STAND",
    "favorite_color" : "white",
    "term": "Fall 2021",
    "course" : "Remade in China",
    "type" : "Group Final Project",
    "links" : ["Google Slides: Research","Final Blog Documentation"],
    "Picture_url": "img10.jpg"
  },{
    "title" : "THE PARADOXICAL CITY",
    "favorite_color" : "white",
    "term": "Fall 2021",
    "course" : "VR / AR Fundamentals",
    "type" : "Group Final Project",
    "links" : ["Google Doc Proposal","Final Blog Documentation"],
    "Picture_url": "img11.jpg"
  },{
    "title" : "ENTROPIC EMOTIONS",
    "favorite_color" : "white",
    "term": "Fall 2021",
    "course" : "Media Architecture",
    "type" : "Group Final Project",
    "links" : ["Video","Intro"],
    "Picture_url": "img12.jpg"
  },{
    "title" : "CHINESE STYLE VEST & EL WIRES",
    "favorite_color" : "white",
    "term": "Spring 2022",
    "course" : "E-textiles",
    "type" : "Individual Project",
    "links" : ["Instructables Documentation"],
    "Picture_url": "img13.jpg"
  },
  {
    "title" : "A MIDSUMMER NIGHT'S DREAM",
    "favorite_color" : "white",
    "term": "Spring 2022",
    "course" : "E-textiles",
    "type" : "Group Project",
    "links" : ["Instructables Documentation"],
    "Picture_url": "img14.jpg"
  },{
    "title" : "WEBPAGES: ABOUT PLASTIC",
    "favorite_color" : "white",
    "term": "Spring 2022",
    "course" : "Intro to Web Development",
    "type" : "Individual Midterm Project",
    "links" : ["Webpages"],
    "Picture_url": "img15.jpg"
  },{
    "title" : "PERFORMING PINBALL",
    "favorite_color" : "white",
    "term": "Spring 2022",
    "course" : "Interaction Lab",
    "type" : "Group Midterm Project",
    "links" : ["Blog Documentation"],
    "Picture_url": "img16.jpg"
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContent0 = document.createElement("P");
  newContent0.innerText = "Term: " + incomingJSON['term'];
  newContentElement.appendChild(newContent0);

  let newContent1 = document.createElement("P");
  newContent1.innerText = "Course: " + incomingJSON['course'];
  newContentElement.appendChild(newContent1);

  let newContent2 = document.createElement("P");
  newContent2.innerText = "Type: " + incomingJSON['type'];
  newContentElement.appendChild(newContent2);

  let newContent3 = document.createElement("P");
  newContent3.innerText = "Links: ";
  newContentElement.appendChild(newContent3);

  let newContentLinkList = document.createElement("UL");
  newContentElement.appendChild(newContentLinkList);

  for (var i = 0; i < incomingJSON['links'].length; i++) {
    var currentLinkString = incomingJSON['links'][i];
    var newLinkItem = document.createElement("LI");
    newLinkItem.innerText = currentLinkString;
    newContentLinkList.appendChild(newLinkItem);
  }

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['Picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);

}
