// Função para obter as cores da página
function getColorsFromPage() {
    let colors = [];  // Vetor para armazenar os nomes das cores

    // Seleciona todas as linhas da tabela com a classe 'w3-table-all'
    const rows = document.querySelectorAll('table.w3-table-all tr');

    // Itera sobre as linhas da tabela
    rows.forEach(row => {
        // Para cada linha, pega a primeira célula (coluna 1), que tem o nome da cor
        const cells = row.querySelectorAll('td');

        // Verifica se a linha tem pelo menos 3 células e se a primeira célula tem texto
        if (cells.length >= 3) {
            const colorName = cells[0].textContent.trim().toLowerCase();  // Pega o nome da cor e converte para minúsculas
            if (colorName) {
                colors.push(colorName);  // Adiciona a cor ao vetor
            }
        }
    });

    return colors;  // Retorna o vetor com os nomes das cores
}

// Executa a função e armazena as cores no vetor colorsArray
const colorsArray = getColorsFromPage();
console.log(colorsArray);  // Exibe as cores no console

// Função para escolher 10 cores aleatórias
function getRandomColors(colors) {
    let randomColors = [];
    // Escolhe 10 cores aleatórias do vetor de cores
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        randomColors.push(colors[randomIndex]);
    }
    return randomColors;
}

// Executa a função para escolher 10 cores aleatórias e exibe no console
const randomColors = getRandomColors(colorsArray);
console.log(randomColors);  // Exibe as 10 cores aleatórias no console

// Função para escolher uma cor aleatória entre as 10 cores
function getRandomColorFromArray(randomColors) {
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    const randomColor = randomColors[randomIndex];
    console.log(randomColor);  // Exibe a cor aleatória no console
}

// Executa a função para escolher uma cor aleatória e exibe no console
getRandomColorFromArray(randomColors);
