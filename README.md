# Interactive Captcha Solver Web Application

## 1. Project Title and Description

This project provides a responsive and user-friendly interactive captcha solver interface. It dynamically generates a CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) image using an HTML `<canvas>` element (as no static image was provided). Users are prompted to enter the characters they see into an input field. Upon submission, the application immediately validates the input against the correct captcha value, providing clear and visually distinct feedback. The interface is styled with Bootstrap 5 from jsdelivr, ensuring a modern look and feel, and includes real-time error handling for empty or incorrect submissions.

## 2. Setup Instructions

To run this application locally, follow these simple steps:

1.  **Clone or Download:** Obtain the project files by cloning the repository or downloading them to your local machine.
2.  **Open `index.html`:** Navigate to the project directory and open the `index.html` file in any modern web browser. You can typically do this by double-clicking the file.

The application is entirely client-side, so no additional server setup or dependencies are required.

## 3. Usage Guide

1.  **View Captcha:** When you open `index.html`, a randomly generated captcha image will be prominently displayed.
2.  **Enter Text:** Type the characters you see in the captcha image into the input field labeled "Enter Captcha". The validation is case-insensitive for user convenience.
3.  **Submit:** Click the "Submit" button (or press `Enter` in the input field) to verify your input.
4.  **Feedback:** Immediate feedback will appear in the designated result section below the input:
    *   **Empty Input:** If you attempt to submit an empty input, a warning message will be displayed, and the captcha will not refresh.
    *   **Correct Input:** A "Correct!" message will appear in green.
    *   **Incorrect Input:** An "Incorrect, please try again." message will appear in red, and a new captcha will automatically be generated for you to attempt again.
5.  **Refresh Captcha:** If the current captcha is difficult to read or you wish to try a new one, click the "Refresh Captcha" button.

## 4. Code Explanation

The application is structured into four main files:

*   `index.html`: Defines the main structure and layout of the web page. It includes:
    *   Links to Bootstrap 5 CSS for responsive styling.
    *   A prominent container (`#captcha-image`) where the dynamic captcha canvas is rendered.
    *   An input field (`#captcha-input`) for user entry.
    *   Buttons for refreshing the captcha (`#refresh-captcha`) and submitting the input (`#captcha-submit`).
    *   A dedicated `div` (`#captcha-result`) to display validation feedback.
    *   Links to Bootstrap 5 JavaScript bundle and the custom `script.js`.

*   `style.css`: Contains minimal custom CSS to ensure the captcha canvas is properly displayed, centered, and has a consistent appearance. It also provides styling for the result section.

*   `script.js`: This is the core JavaScript file implementing the application's logic:
    *   `currentCaptchaText`: Stores the current captcha string for validation.
    *   `generateCaptchaText(length)`: Creates a random alphanumeric string.
    *   `drawCaptcha(text)`: Renders the given text onto an HTML `<canvas>`, applying random distortions (lines, dots, rotation, font variations) to simulate a real captcha. It dynamically creates the canvas if it doesn't exist within `#captcha-image`.
    *   `refreshCaptcha()`: Generates and draws a new captcha, then clears the input field and any previous result messages.
    *   `verifyCaptcha()`:
        *   Retrieves and trims the user's input from `#captcha-input`.
        *   **Empty Input Handling**: Checks if the input is empty. If so, it displays a `text-warning` message in `#captcha-result` and immediately returns without refreshing the captcha.
        *   **Validation**: Compares the user's (case-insensitive) input with `currentCaptchaText`.
        *   **Feedback**: Updates `#captcha-result` with a success (`text-success`) or failure (`text-danger`) message.
        *   **New Captcha on Incorrect**: If the input is incorrect, `refreshCaptcha()` is called to present a new challenge.
        *   Clears the input field after each verification attempt.
    *   **Event Listeners**: Attaches listeners for:
        *   `DOMContentLoaded`: Calls `refreshCaptcha()` on page load.
        *   Click events for "Refresh Captcha" (`#refresh-captcha`) and "Submit" (`#captcha-submit`) buttons.
        *   `keypress` event on the input field (`#captcha-input`) to allow submission via the `Enter` key.

*   `LICENSE`: Contains the MIT License details for the project.

## 5. License Information

This project is open-source and licensed under the MIT License.

```
MIT License

Copyright (c) 2025 Sakshi Agarwal

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
