function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.child
    for (const prop in reactElement.props) {
        if(prop==='children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
    console.log("run successfully")
}

const reactelement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank',
    },
    child: 'Click me to visit google'
}
const maincontainer = document.querySelector("#root")
customRender(reactelement, maincontainer)