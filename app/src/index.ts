document.body.style.backgroundColor = "green";

interface Props {
  text: string;
  age: number;
  langs: string[];
}

const data: Props = {
  text: "Jaime",
  age: 28,
  langs: ["ES", "EN"],
};

const newData = { ...data, lastname: "Polo" };

const { text, age, lastname } = newData;

const domRoot = document.getElementById("root");
domRoot.innerHTML = `
Hola ${text} ${lastname}  </br>
mi edad es de ${age} </br>
mis idiomas son : ${data.langs.map((lang) => lang)} </br>
mi preferido es: ${data.langs.find((lang) => lang === "ES")}
`;
