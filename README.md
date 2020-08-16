![](/logo.svg)

# NotesPicker
A small tool for picking up your notes or palettes quickly and easily, **Notespicker** can handle multiple notes and remainders at the same time.
This an big update for my [colors-picker](https://github.com/Heaty566/colors-picker) project
---
## Features
- Managing multiple notes at the same time.
- Saving your current note into local storage (Allow working with offline mode)
- Logging user by google 

## Optimization
- reducing rerender in Reactjs with (No rerender on typing text field)
- avoiding access to mongodb (Using session to remember user)
---
## How to run
- git clone
- npm i (with both client and server)
- fill config file in server folder (.env)
- npm start (running production mode)
- npm start:dev(running development mode)
## How to use
- Add Color: to add a new column of color schema that you can custom color and name color variable on your own.
- Create Schema: this button gives you a remembering string that you can put into "Enter your colors schema" for the next time.
- Getting Name: this button will switch from taking color codes to the color name variable.
- Enter your colors schema: this input will decode your remembering string to schema color that you can work instantly.
- Color Card: when you click on the color cards, you will get a copy to clipboard of your color codes or color name variable.

---

## Color input

- color: you will fill by your colors code
- Name of your color: you can custom colors code by name.

### EX:
- color:#6c5ce7 --- Name of color: var(--example-color) (CSS)
- color:#a29bfe ---- Name of color: \$background-color (SCSS)
- color:rgba(255, 234, 167,1.0) --- Name of color:colors.background[1].sourLemon (JS)
- hello: "hello I'm Simon" (raw text)
---

## Project Issue
---
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://heaty566.com" target="_blank">Heaty566 Page</a>.
