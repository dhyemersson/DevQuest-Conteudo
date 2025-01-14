# Frontend Mentor - Solução para o desafio do aplicativo gerador de conselhos

Esta é uma solução para o [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).  Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação, construindo projetos realistas.

## Sumário

- [Visão Geral](#Visão-Geral)
  - [O Desafio](#O-Desafio)
  - [Captura de Tela](#Captura-de-Tela)
- [Meu Processo](#Meu-Processo)
  - [Construído com](#Construído-com)
  - [O que eu aprendi](#O-que-eu-aprendi)
  - [Desenvolvimento Futuro](#Desenvolvimento-Futuro)
  - [Recursos Úteis](#Recursos-Úteis)
- [Autor](#Autor)
- [Agradecimentos](#Agradecimentos)


## Visão Geral

### O Desafio

Os usuários devem conseguir:

Ver o layout ideal para o aplicativo, dependendo do tamanho da tela do seu dispositivo
Ver estados de hover para todos os elementos interativos na página
Gerar um novo conselho clicando no ícone do dado

### Captura de Tela

![](./design/desktop-design.jpg)

![](./design/mobile-design.jpg)

## Meu Processo

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas em CSS
- Flexbox
- Consultas de mídia (Media queries)
- JavaScript


### O que eu aprendi

Neste projeto, aprendi como criar um layout responsivo usando Flexbox e consultas de mídia. Além disso, melhorei minhas habilidades em JavaScript ao implementar a funcionalidade para gerar conselhos aleatórios.

Aqui estão alguns trechos de código dos quais estou orgulhoso:

```html
<button class="botao" onclick="geraConselho()"><img class="icon" src="./src/images/icon-dice.svg" alt=""></button >
```
```css
.botao:hover {
    box-shadow: 0 0 30px hsl(150, 100%, 66%)
}
```
```js
function geraConselho() {
  const indice = Math.floor(Math.random() * conselhos.length);
  document.getElementById("resultado").textContent = conselhos[indice];
  numeroConselho++;
  document.getElementById(
    "numConselho"
  ).textContent = `CONSELHOS #${numeroConselho}`;
  proudOfThisFunc();
}
```

### Desenvolvimento Futuro

Em futuros projetos, desejo aprimorar ainda mais meu entendimento dos princípios de design responsivo e continuar praticando JavaScript para construir recursos mais interativos.


### Recursos Úteis

- [MDN Web Docs ](https://developer.mozilla.org/pt-BR/)- Este site forneceu documentação detalhada e exemplos para HTML, CSS e JavaScript, o que me ajudou a entender conceitos e resolver desafios de codificação.
- [Flexbox Froggy ](https://flexboxfroggy.com/) - Este jogo interativo me ajudou a solidificar meu entendimento das propriedades de layout Flexbox e como usá-las efetivamente.
- [JavaScript30 ](https://javascript30.com/) - Este curso gratuito de JavaScript, criado por Wes Bos, forneceu exercícios práticos de codificação e projetos que melhoraram minhas habilidades em JavaScript.


## Autor

- GitHub - [Meu perfil no GitHub](https://github.com/dhyemersson)
- Frontend Mentor - [Frontend Mentor](https://www.frontendmentor.io/profile/yourusername)


## Agradecimentos

Gostaria de expressar minha gratidão ao curso Dev em Dobro, uma iniciativa incrível que me proporcionou uma base sólida em programação web. Seus recursos e tutoriais foram fundamentais para meu aprendizado e crescimento como desenvolvedor.

Também quero agradecer à equipe do Dev em Dobro pelo suporte contínuo e pela comunidade acolhedora. Suas orientações e feedback foram inestimáveis durante minha jornada de aprendizado.

Além disso, agradeço à comunidade do Frontend Mentor por fornecer projetos desafiadores que me permitiram aplicar e aprimorar minhas habilidades de codificação. O apoio e a colaboração de outros desenvolvedores também foram fundamentais para meu progresso.
