 const randomNumber = Math.floor(Math.random() * 10) + 1;

        const guessForm = document.getElementById('guessForm');
        const guessInput = document.getElementById('guessInput');
        const resultDiv = document.getElementById('result');

        guessForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const guessValue = guessInput.value.trim();

            try {
                const guessNumber = parseInt(guessValue, 10);

                if (isNaN(guessNumber)) {
                    throw new Error('Por favor, insira apenas números.');
                }

                if (guessNumber < 1 || guessNumber > 10) {
                    throw new Error('O palpite deve estar entre 1 e 10.');
                }

                if (guessNumber === randomNumber) {
                    resultDiv.innerHTML = '<p>Parabéns! Você acertou!</p>';
                } else if (guessNumber < randomNumber) {
                    resultDiv.innerHTML = '<p>O número escolhido pelo computador é maior.</p>';
                } else {
                    resultDiv.innerHTML = '<p>O número escolhido pelo computador é menor.</p>';
                }

                guessInput.value = ''; 

            } catch (error) {
                resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
            }
        });