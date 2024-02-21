// Напишіть скрипт, який перевіряє наявність в масиві ["Pyton", "C++", "C#",
// "PHP"] значення "Java Script". Якщо в масиві такого значення немає вивести в
// консоль "Значення Java Script в списку немає, додаємо в масив". Після чого
// додати "Java Script" в кінець масиву.

const languages = ["Python", "C++", "C#", "PHP"];

if (!languages.includes("Java Script")) {
  console.log("Значення Java Script в списку немає, додаємо в масив");
  languages.push("Java Script");
}

console.log(languages);