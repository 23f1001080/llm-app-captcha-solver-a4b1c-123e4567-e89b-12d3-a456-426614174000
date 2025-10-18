let currentCaptchaText = '';

function generateCaptchaText(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function drawCaptcha(text) {
    const captchaContainer = document.getElementById('captcha-image');
    let canvas = captchaContainer.querySelector('canvas');

    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 80;
        captchaContainer.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add some noise lines
    for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }

    // Add some noise dots
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw text
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < text.length; i++) {
        ctx.save();
        const char = text[i];
        const x = (canvas.width / (text.length + 1)) * (i + 1) + (Math.random() - 0.5) * 10;
        const y = canvas.height / 2 + (Math.random() - 0.5) * 10;
        const rotation = (Math.random() - 0.5) * 0.4; // +/- 0.2 radians

        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillText(char, 0, 0);
        ctx.restore();
    }

    currentCaptchaText = text;
}

function refreshCaptcha() {
    const captchaText = generateCaptchaText();
    drawCaptcha(captchaText);
    document.getElementById('captcha-input').value = '';
    const resultDiv = document.getElementById('captcha-result');
    resultDiv.innerHTML = '';
    resultDiv.classList.remove('text-success', 'text-danger', 'text-warning'); // Clear all feedback classes
}

function verifyCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const userInputTrimmed = userInput.trim();
    const resultDiv = document.getElementById('captcha-result');

    // Clear previous feedback classes before setting new ones
    resultDiv.classList.remove('text-success', 'text-danger', 'text-warning');

    if (userInputTrimmed.length === 0) {
        resultDiv.innerHTML = 'Input cannot be empty.';
        resultDiv.classList.add('text-warning');
        return; // Stop further processing
    }

    if (userInputTrimmed.toLowerCase() === currentCaptchaText.toLowerCase()) {
        resultDiv.innerHTML = 'Correct';
        resultDiv.classList.add('text-success');
    } else {
        resultDiv.innerHTML = 'Incorrect';
        resultDiv.classList.add('text-danger');
        refreshCaptcha(); // Generate new captcha on incorrect attempt
    }
    document.getElementById('captcha-input').value = ''; // Clear input after verification
}

document.addEventListener('DOMContentLoaded', () => {
    refreshCaptcha();

    document.getElementById('refresh-captcha').addEventListener('click', refreshCaptcha);
    document.getElementById('captcha-submit').addEventListener('click', verifyCaptcha);

    // Allow pressing Enter key to verify
    document.getElementById('captcha-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            verifyCaptcha();
        }
    });
});
