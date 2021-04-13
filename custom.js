let currentCount = 0;

function showFieldName() {
    recordCards = document.getElementsByClassName('record-metadata')
    if ((recordCards.length - currentCount > 20)) {
        currentCount = 0
    }
    if (recordCards.length > currentCount) {
        currentCount = recordCards.length
        const fieldNames = [
            "Date Created",
            "Status",
            "Customer Name",
            "Sample Status",
            "Exclusive",
            "Exclusivity Customer",
            "eComm Customer Usage"
        ]

        //let records = []
        //console.log(recordCards)
        for (let card of recordCards) {
            let childIndex = 0
            for (let child of card.children) {
                if(!child.getAttribute('processed')) {
                    child.setAttribute('processed', true)
                }
                else {
                    break
                }
                //console.log(child)
                if (child.classList.contains('record-description')) {
                    //console.log(child.innerHTML)
                    if (child.innerText.match(/:\s/g)) {
                        child.innerText = child.innerText.split(': ')[1]
                    }
                    if (child.innerText.match(/-$/i)) {
                        child.innerHTML = `<span style="font-weight: 700">${fieldNames[childIndex]}: </span>n/a` 
                    }
                    else {
                        child.innerHTML = `<span style="font-weight: 700">${fieldNames[childIndex]}: </span>${child.innerText}`
                    }
                    
                    childIndex % 2 == 0 ? child.style.backgroundColor = "#dddddd" : null
                    child.style.color = "rgb(50,50,50)"
                    child.style.borderRadius = "5px"
                    child.style.paddingLeft = "10px"
                    childIndex++
                    //console.log(childIndex)
                }
            }
        }
    }
}

document.querySelectorAll('#content, #search-content, #library-content, #collectionbasket-content, #upload-content').forEach(element => {
    console.log('im wheelin!')
    element.addEventListener('wheel', (event) => {
        showFieldName()
    })
    element.addEventListener('readystatechange', (event) => {
        showFieldName()
    })
    element.addEventListener('scroll', (event) => {
        showFieldName()
    })
})

document.addEventListener('readystatechange', () => {
    console.log(document.readyState)
    if (document.readyState == "complete") {
        let i = setInterval(() => {
            //console.log("updating fieldName")
            showFieldName()
        }, 500);

        setTimeout(() => {
            window.clearInterval(i)
        }, 2000)
    }
})