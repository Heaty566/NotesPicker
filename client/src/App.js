import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import PageHead from "./utils/setHead";
import Controller from "./containers/Controller";

function App() {
        return (
                <React.Fragment>
                        <PageHead
                                pageTitle="Home"
                                pageDescription="A small tool for picking up your notes or palettes quickly and easily, Notespicker can handle multiple notes and remainders at the same time."
                                pageKeyWords="picker, note, colors, notespicker, palette, remainder, notes"
                                pageImageURL="asset/image/banner.png"
                                pageURL="https://notespicker.herokuapp.com/"
                        />
                        <ToastContainer
                                position="top-right"
                                autoClose={4000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                        />
                        <Controller />
                </React.Fragment>
        );
}

export default App;
