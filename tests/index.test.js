const jestdom = require("@testing-library/jest-dom");
const {toBeInTheDocument} = jestdom;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

test('Index page should be render logo', async() =>{
    let dom = await JSDOM.fromFile("./index.html", {
        resources: "usable",
        runScripts: "dangerously"
    })
    let window = dom.window
    let document = dom.window.document
    const logo = document.querySelector('.logo')
    expect(logo).toBeInTheDocument();
})
