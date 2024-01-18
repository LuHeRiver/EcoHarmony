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

