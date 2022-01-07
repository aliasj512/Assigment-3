
//# 1 Select the section with an id of container without using querySelector.
const a=document.getElementById('container');
console.log(a);


// # 2 Select the section with an id of container using querySelector
const b=document.querySelector("#container");
console.log(b);

// # 3 Select all of the list items with a class of "second".
const c=document.getElementsByClassName("second");
console.log(c);

// # 4 Select a list item with a class of third, but only the list item inside of the ol tag.
const d=document.getElementsByClassName("ol third");
console.log(d);

// # 5 Give the section with an id of container the text "Hello!";
const e = document.querySelector("#container");
e.innerText = "Hello!";
console.log(e);

//#6 Add the class main to the div with a class of footer.
const g = document.querySelector(".footer");
g.classList.add("main");

// #7 Remove the class main on the div with a class of footer.
const h = document.querySelector(".footer");
h.classList.remove("main");
console.log(h);

//#8 Create a new li element.
const z= document.createElement("li");
console.log(z);

//9) Give the li the text "four".
const le = "four";
console.log(le);

//10) Append the li to the ul element.
const j = document.createElement("li")
 j.append("ul");
console.log(j);

// # 12 const f=document.querySelectorAll("ol li");
for(var i=0;i<f.length;i++){
    f[i].style.background="green"

}
console.log(f);

//#13 Remove the div with a class of footer
const div = document.querySelector(".footer");
div.remove();
console.log(div);