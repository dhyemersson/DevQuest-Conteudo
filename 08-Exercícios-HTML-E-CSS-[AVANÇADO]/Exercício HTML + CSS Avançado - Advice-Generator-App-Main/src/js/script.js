const proudOfThisFunc = () => {
  console.log("🎉");
};

let numeroConselho = 1;

const conselhos = [
  "Um pequeno erro pode te levar para um grande caminho.",
  "A persistência é o segredo do sucesso.",
  "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar em movimento.",
  "Se você quer algo que nunca teve, você deve estar disposto a fazer algo que nunca fez.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não espere por circunstâncias ideais. Tome decisões e torne-as ideais.",
  "Quando você sentir vontade de desistir, lembre-se do motivo pelo qual começou.",
  "Não tenha medo de desistir do bom para perseguir o ótimo.",
  "A persistência é o caminho do êxito.",
  "Não importa o quão devagar você vá, desde que você não pare.",
  "Acredite em si mesmo e tudo será possível.",
  "O segredo para alcançar é começar.",
];

function geraConselho() {
  const indice = Math.floor(Math.random() * conselhos.length);
  document.getElementById("resultado").textContent = conselhos[indice];
  numeroConselho++;
  document.getElementById(
    "numConselho"
  ).textContent = `CONSELHOS #${numeroConselho}`;
  proudOfThisFunc();
}
