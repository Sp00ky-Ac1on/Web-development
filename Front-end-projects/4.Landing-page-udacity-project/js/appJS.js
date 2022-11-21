// building the navigation bar to be dynamic through looping on the sections length:

const SectionsCount = document.querySelector(".sections").children.length;
const navList = document.querySelector("#nav-list");

for (let i = 1; i <= SectionsCount; i++) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  const navBar = document.querySelector(".nav-bar");

  // add text and attributes to <a>

  anchor.setAttribute("href", `#section${i}`);
  anchor.setAttribute("class", "links");
  anchor.textContent = `section ${i}`;

  navList.appendChild(listItem);
  listItem.appendChild(anchor);
  navBar.appendChild(navList);

  // and this is to make sure that sections grid are styled in the same way no matter how many sections were added
  let sections = document.querySelector(`#section${i}`);
  if (i % 2 === 0) {
    sections.style = "justify-self:right;text-align: right;";
  }
}


// to add the active class when the section is inview

let Mysections = document.querySelectorAll("section");

onscroll = function () {

  let scrollPosition = document.documentElement.scrollTop;
  
  Mysections.forEach(section => {
    if (scrollPosition >= section.offsetTop  && scrollPosition <= (section.offsetTop +section.offsetHeight)) {
      section.classList.add("active");
    }
    else {
      section.classList.remove("active");
    }
  })

// this function i create using the scroll and section position to highlight the link with the same id as the current id of the chosen section => [note : it was not easy at all to figure something out]

Mysections.forEach(section => {
    if (scrollPosition >= section.offsetTop && scrollPosition <= (section.offsetTop +section.offsetHeight)) {

      let currentID = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentID);
    }

  })
}

// to remove active class from all classes 
let removeAllActiveClasses = function () {
  document.querySelectorAll("#nav-list a").forEach((element) => {
    element.classList.remove("active");
  })
}

// to add active class for anchors that has the id of the current section
let addActiveClass = function (id) {
  let selector = `a[href="#${id}"]`
  // console.log(selector)

  document.querySelector(selector).classList.add("active")
}




// i thought of adding this button in the bar to make it easier to get back to the top from anywhere in the page

navList.insertAdjacentHTML(
  "afterbegin",
  `<a id="topAnchor" href="#top">Top</a>`
);
// styling
document.getElementById("topAnchor").style =
  "padding: 13px 17px;background-color: #0000009c;color: wheat;";



// to scroll to sections smothly i made an array for [a] and got forEach to loop over each a
// then with each a i made eventlistener  

document.querySelectorAll('a.links').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// and by the way if we did'nt make this scrolling event listner it will still work the same cause i added in the css html {scroll-behavior: "smooth"} , 
// i added the above method as to satisfy the project requirements.

