const MyDavidFamily = [
  {
    name: "John",
    children: ["Ali", "MOhsin", "Alex", "Tajwar"],
  },
  {
    name: "Alx",
    children: ["Ayaz", "Faizan", "Karem", "Sajjad"],
  },
  {
    name: "Cendrella",
    children: ["Michelle", "Sarah", "Shireen", "Sajjad"],
  },
];
//    Heading
const h1 = document.createElement("h1");
h1.innerHTML = "Mr David Faimly";
document.body.append(h1);
  //ul
var ul = document.createElement("ul");
document.body.append(ul);
// function in parent ul
MyDavidFamily.forEach((family) => {
  // create frist li
  let li = document.createElement("li");
  li.innerHTML = family.name;
  ul.appendChild(li);
  //create ul in li
  let ul2 = document.createElement("ul");
  li.appendChild(ul2);
  // create li in ul
  let li2 = document.createElement("li");
  li2.innerHTML = family.children[0];
  ul2.appendChild(li2);
  li2 = document.createElement("li");
  li2.innerHTML = family.children[1];
  ul2.appendChild(li2);
  li2 = document.createElement("li");
  li2.innerHTML = family.children[2];
  ul2.appendChild(li2);
  li2 = document.createElement("li");
  li2.innerHTML = family.children[3];
  ul2.appendChild(li2);
});