![](/logo.svg)

# NotesPicker
A small tool for picking up your notes or palettes quickly and easily, **Notespicker** can handle multiple notes and reminders at the same time.
This is also a big update for my [colors-picker](https://github.com/Heaty566/colors-picker) project

---

## Features
- Managing multiple notes at the same time.
- Saving your current note into local storage (Allow working with offline mode)
- Logging user by google 

## Optimization
- reducing rerender in Reactjs with (No rerender on typing text field)
- avoiding access to MongoDB (Using session to remember the user and note lists)

---

## How to run
- git clone
- npm i (with both client and server)
- fill config file in server folder (.env)
- npm start (running production mode)
- npm start:dev (running development mode)

---

### Input and Example:
- color:#6c5ce7 --- Name of color: var(--example-color) (CSS)
- color:#a29bfe ---- Name of color: \$background-color (SCSS)
- color:rgba(255, 234, 167,1.0) --- Name of color:colors.background[1].sourLemon (JS)
- hello: "hello I'm Simon" (raw text)

---

## Project Issue
- I tried to upload in Heroku. However, I got someting wrong with mongo-session I will deploy later :)

---

## Support

Reach out to me at one of the following places!

- Website at <a href="https://heaty566.com" target="_blank">Heaty566.com</a>
- Facebook at <a href="https://www.facebook.com/Heaty566" target="_blank">Phạm Vĩnh Nhân</a>

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://heaty566.com" target="_blank">Heaty566.com</a>.
