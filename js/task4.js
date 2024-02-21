// 4.  У вас є масив ["1-Pyton", "2-C++", "3-C#","4-PHP"]. В результаті вам
// потрібно отримати ["Pyton", "C++", "C#","PHP"]
const languages = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];

const languageNames = languages.map((language) => language.slice(2));

console.log(languageNames);