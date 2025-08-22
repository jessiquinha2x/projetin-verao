<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Modo Gilberto Gil</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            font-size: 1rem;
            background-color: #f0f0f0;
            transition: all 0.5s ease;
        }

        #modo-gil {
            padding: 10px 20px;
            background-color: #2e8b57;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
        }

        .gil-ativo {
            background-color: #ffe4b5;
            color: #2e8b57;
            font-size: 1.2rem;
        }

        #frase-gil {
            margin-top: 20px;
            font-style: italic;
            display: none;
        }

        .mostrar-frase {
            display: block;
        }
    </style>
</head>
<body>
    <button id="modo-gil">Ativar Modo Gilberto Gil 🎶</button>
    <div id="frase-gil">"O melhor lugar do mundo é aqui e agora." – Gilberto Gil</div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const botaoGil = document.getElementById('modo-gil');
            const fraseGil = document.getElementById('frase-gil');

            botaoGil.addEventListener('click', function () {
                document.body.classList.toggle('gil-ativo');
                fraseGil.classList.toggle('mostrar-frase');

                botaoGil.textContent = document.body.classList.contains('gil-ativo')
                    ? 'Desativar Modo Gilberto Gil 🌙'
                    : 'Ativar Modo Gilberto Gil 🎶';
            });
        });
    </script>
</body>
</html>
