// Função para obter uma cor intermediária entre duas cores quentes (vermelho, amarelo, roxo, lilás e rosa)
function getIntermediateColor(startColor, endColor, ratio) {
    const r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
    const g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
    const b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));
    return `rgb(${r}, ${g}, ${b})`;
}

// Função para aplicar o efeito de mudança de cor automaticamente
function applyColorTransition(button, startColor, endColor) {
    let ratio = 0; // Iniciar com o valor 0
    let increasing = true; // Flag para determinar se estamos aumentando ou diminuindo a cor

    // Função para atualizar a cor do botão
    function updateColor() {
        const color = getIntermediateColor(startColor, endColor, ratio);
        button.style.backgroundColor = color;
    }

    // Função para animar a cor de forma contínua
    function animateColorChange() {
        if (increasing) {
            ratio += 0.01; // Taxa de aumento da cor (pode ajustar conforme necessário)
            if (ratio >= 1) {
                increasing = false;
            }
        } else {
            ratio -= 0.01; // Taxa de diminuição da cor (pode ajustar conforme necessário)
            if (ratio <= 0) {
                increasing = true;
            }
        }

        updateColor();
        requestAnimationFrame(animateColorChange);
    }

    animateColorChange();
}

// Aplicar o efeito para cada botão
const buttons = document.getElementsByClassName("botao-redondo");
for (let i = 0; i < buttons.length; i++) {
    switch (i) {
        case 0: // GitHub (vermelho para amarelo)
            applyColorTransition(buttons[i], [255, 0, 0], [255, 255, 0]);
            break;
        case 1: // Twitter (amarelo para roxo)
            applyColorTransition(buttons[i], [255, 255, 0], [128, 0, 128]);
            break;
        case 2: // Instagram (roxo para rosa)
            applyColorTransition(buttons[i], [128, 0, 128], [255, 192, 203]);
            break;
        case 3: // TIKTOK (rosa para vermelho)
            applyColorTransition(buttons[i], [255, 192, 203], [255, 0, 0]);
            break;
    }
}
