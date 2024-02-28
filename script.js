const heading = React.createElement("h1", {}, "Learn web development");
const para1 = React.createElement(
  "p",
  {},
  "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."
);
const para2 = React.createElement(
  "p",
  {},
  'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from,',
  React.createElement(
    "a",
    { href: "https://developer.mozilla.org/en-US/" },
    " the rest of MDN "
  ),
  "and other intermediate to advanced resources that assume a lot of previous knowledge."
);
const para3 = React.createElement(
  "p",
  {},
  "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
);
const hr = React.createElement("hr", {}, null);
const div = React.createElement(
  "div",
  {
    style: {
      height: "79vh",
      width: "60vw",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "60px",
      paddingTop: "30px",
      fontSize: "1.3rem",
      lineHeight: "2rem",
      letterSpacing: "0.04rem",
    },
  },
  [hr, heading, para1, para2, para3]
);

ReactDOM.render(div, document.getElementById("root"));
