document.querySelectorAll('#search-content, #collectionbasket-content, #upload-content').forEach(targetNode => {
    const observer = new MutationObserver((mutationList) => {
        let currentCount = 0;
        mutationList.forEach((mutation, index) => {
            //console.log(mutation.type)
            if (document.querySelector('.record-items')) {
                let recordCards = document.getElementsByClassName('record-metadata')
                if ((recordCards.length - currentCount > 20)) {
                    currentCount = 0
                }
                if (recordCards.length > currentCount) {
                    //console.log(currentCount)
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
                            if (!child.getAttribute('processed')) {
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

                                if (targetNode.id != "collectionbasket-content") {
                                    childIndex % 2 == 0 ? child.style.backgroundColor = "#dddddd" : null
                                    child.style.color = "rgb(50,50,50)"
                                }
                                child.style.borderRadius = "5px"
                                child.style.paddingLeft = "10px"
                                childIndex++
                                //console.log(childIndex)
                            }
                        }
                    }
                }
            }
        })
    });
    observer.observe(targetNode, { subtree: true, childList: true })
})
