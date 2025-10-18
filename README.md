# Captcha Verification Web App

## 1. Project Title and Description

This is a simple web application designed to display a dynamically generated CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) image, prompt the user to solve it by entering the characters, and then verify their input. The application uses HTML, CSS, and JavaScript, with Bootstrap 5 for modern and responsive styling. Since no static captcha images were provided, the captcha is generated on-the-fly using the HTML `<canvas>` element, complete with random characters, colors, rotations, and noise to simulate a real-world captcha.

## 2. Setup Instructions

To run this application locally, follow these simple steps:

1.  **Clone or Download:** Download or clone the repository containing these files to your local machine.
2.  **Open `index.html`:** Navigate to the project directory and open the `index.html` file in your preferred web browser. You can usually do this by double-clicking the file.

That's it! There are no complex backend setups or dependencies to install as it's a purely client-side application.

## 3. Usage Guide

1.  **View Captcha:** Upon opening `index.html`, a randomly generated captcha image will be displayed in the designated area.
2.  **Enter Text:** Type the characters you see in the captcha image into the input field labeled "Enter Captcha". The captcha is case-insensitive for user convenience.
3.  **Verify:** Click the "Verify" button (or press `Enter` in the input field) to check your answer.
4.  **See Result:** The result (either "Correct!" or "Incorrect, please try again.") will be displayed below the input field.
5.  **Refresh:** If you find the captcha difficult to read or wish to try a new one, click the "Refresh Captcha" button.
6.  **Incorrect Attempts:** If your answer is incorrect, a new captcha will automatically be generated for you to try again.

## 4. Code Explanation

The application is structured into three main files:

*   `index.html`: This file provides the basic structure of the web page. It includes:
    *   Links to Bootstrap 5 CSS for styling.
    *   A container for the dynamically generated captcha image (`#captcha-image`).
    *   An input field (`#captcha-input`) for the user's answer.
    *   Buttons for refreshing the captcha (`#refresh-captcha`) and verifying the input (`#verify-captcha`).
    *   A `div` (`#captcha-result`) to display verification messages.
    *   Links to Bootstrap 5 JavaScript bundle and the custom `script.js`.

*   `style.css`: This file contains minimal custom CSS to style the captcha container, ensuring the canvas is properly displayed and centered.

*   `script.js`: This is the core logic of the application. It includes:
    *   `currentCaptchaText`: A global variable to store the currently displayed captcha text.
    *   `generateCaptchaText(length)`: A function that generates a random alphanumeric string of a specified `length` (defaulting to 6).
    *   `drawCaptcha(text)`: This function takes a string and draws it onto an HTML `<canvas>` element. It adds visual noise (random lines, dots) and distorts the text (random font properties, rotation, position) to make it harder for bots to read. If a canvas doesn't exist within `#captcha-image`, it creates one.
    *   `refreshCaptcha()`: Calls `generateCaptchaText` to create a new string, then `drawCaptcha` to render it, and clears the input field and result message.
    *   `verifyCaptcha()`: Compares the user's input (case-insensitively) with `currentCaptchaText`. It updates `#captcha-result` with a success or failure message and applies appropriate Bootstrap text color classes. If the input is incorrect, it automatically calls `refreshCaptcha()`.
    *   **Event Listeners:**
        *   `DOMContentLoaded`: Ensures `refreshCaptcha()` is called once the page loads to display the initial captcha.
        *   Click listeners for the "Refresh Captcha" and "Verify" buttons.
        *   A `keypress` listener on the input field allows users to submit by pressing `Enter`.

## 5. License Information

This project is open-source and licensed under the MIT License.

```
MIT License

Copyright (c) [Year] [Your Name or Project Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
