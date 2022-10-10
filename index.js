let messy = document.getElementById('messy').children
function giveIn(obj, xOffset, yOffset) {
    let timer = null
    clearInterval(timer)
    let xPosition = 0
    let yPosition = 0
    timer = setInterval(frame, 5);
    function frame() {
        if(xPosition === 1) {
            clearInterval(timer)
        } else {
            xPosition += 0.01
            yPosition += 0.01
            obj.style.left = Math.cos(xPosition) * 100 + xOffset + 'px'
            obj.style.top = Math.sin(yPosition) * 100 + yOffset + 'px'
        }
    }
}

for(let i = 0;i<messy.length;i++) {
    giveIn(messy[i], Math.random()*100, Math.random()*100)
}