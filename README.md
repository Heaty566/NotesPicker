![](/github/banner.png)

# NotesPicker
A small tool for picking up your notes or palettes quickly and easily, **Notespicker** can handle multiple notes and reminders at the same time.
This is also a big update for my [colors-picker](https://github.com/Heaty566/colors-picker) project

![](/github/web.jpg)

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
- fill config file in server folder (.env and nodemon.json)
- npm start (running production mode)
- npm start:dev (running development mode)
- (You have to change proxy in package.json(react app) to allow nodejs povide session in case You want to run server and client seperately. You also can run server only which has public folder)
---

### Input and Example:
- color:#6c5ce7 --- Name of color: var(--example-color) (CSS)
- color:#a29bfe ---- Name of color: \$background-color (SCSS)
- color:rgba(255, 234, 167,1.0) --- Name of color:colors.background[1].sourLemon (JS)
- hello: "hello I'm Simon" (raw text)

---

## Project Issue
- SEO with NEXT.JS
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
