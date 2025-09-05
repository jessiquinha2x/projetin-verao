document.addEventListener('DOMContentLoaded', function () {
    // Botão de acessibilidade estilo "Modo Sábio"
    const botaoModoSabio = document.getElementById('botao-acessibilidade');
    const opcoesModoSabio = document.getElementById('opcoes-acessibilidade');

    botaoModoSabio.addEventListener('click', function () {
        botaoModoSabio.classList.toggle('rotacao-botao'); // Ativa o chakra do botão
        opcoesModoSabio.classList.toggle('apresenta-lista'); // Revela os jutsus de acessibilidade
    });

    // Botões de controle de fonte: modo Rasengan e modo Shuriken
    const jutsuAumentarFonte = document.getElementById('aumentar-fonte');
    const jutsuDiminuirFonte = document.getElementById('diminuir-fonte');

    let nivelChakraFonte = 1;

    jutsuAumentarFonte.addEventListener('click', function () {
        nivelChakraFonte += 0.1;
        document.body.style.fontSize = `${nivelChakraFonte}rem`; // Chakra em expansão
    });

    jutsuDiminuirFonte.addEventListener('click', function () {
        nivelChakraFonte -= 0.1;
        document.body.style.fontSize = `${nivelChakraFonte}rem`; // Chakra em contenção
    });
});
