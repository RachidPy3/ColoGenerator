const colorName = document.querySelector(".color-name")
const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
    let randomHex = generateColor()
    document.body.style.backgroundColor = `#${randomHex}`
    colorName.textContent = `Background Color: #${randomHex}`
    colorName.style.color = `#${randomHex}`
})

const generateColor = ()=>{
    return Math.floor(Math.random()*16777215).toString(16);
}