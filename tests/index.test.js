const jestdom = require("@testing-library/jest-dom");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let dom;
let window;
let document;

describe('Test index', () => {

    beforeEach(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable",
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
    });

    test('Index page should be render logo', () => {
        const logo = document.querySelector('.logo')
        expect(logo).toBeInTheDocument();
    });

    test('The button of theme is present', () => {
        const btTheme = document.getElementById("dl-icon")
        expect(btTheme).toBeInTheDocument();
    })

    test('Web starts with light theme', () =>{
        const lightMode = document.querySelector(".bi-moon-stars")
        expect(lightMode).toBeInTheDocument();
    })
})

describe('Test contact', ()=> {
    beforeEach(async () => {
        dom = await JSDOM.fromFile("./pages/contacto.html", {
            resources: "usable",
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
    });

    test('The send button exist', () =>{
        const btSend = document.querySelector('.contact--button')
        expect(btSend).toBeInTheDocument();
    })

    test("labels must contain 'required", ()=> {
        const inputs = document.querySelectorAll("input")
        inputs.forEach(input => {
            expect(input.hasAttribute('required')).toBe(true)
        })

    })
})
