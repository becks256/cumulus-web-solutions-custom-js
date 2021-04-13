// class Collection {
//     constructor() {
//         this.records = [];
//         this.totalCards = 0;
//         this.setRecord = (obj) => {
//             this.records.push(obj)
//         }
//     }
// }

// const collection = new Collection();

// const showFieldName = () => {
//     const collection = {};
//     const recordCards = document.getElementsByClassName('record-metadata')
//     const fieldNames = [
//         "Date Created",
//         "Status",
//         "Customer Name",
//         "Sample Status",
//         "Exclusive",
//         "Exclusivity Customer",
//         "eComm Customer Usage"
//     ]

//     if (collection.totalCards < recordCards.length) {
//         collection.totalCards = recordCards.length

//         for (var card in recordCards) {
//             let obj = []
//             for (let child in recordCards[card].children) {
//                 //console.log(recordCards[card].children[child])
//                 let e = recordCards[card].children[child]
//                 if (typeof e === 'object' && e.classList.contains('record-description')) {
//                     obj.push({element: e, processed: false, key: card})
//                 }
//             }
//             if (obj.length > 0) {
//                 collection.setRecord(obj)
//             }
//         }
    
//         for (let group in collection.records) {
//             //console.log(collection.records[group])
//             if (collection.records[group].length > 0) {
//                 //console.log(collection.records[group])
//                 for (let item in collection.records[group]) {
//                     let e = collection.records[group][item]
//                     //console.log(e)
//                     if (e && e.processed === false) {
//                         e.processed = true
//                         if (e.element.innerText.match(/:\s/g)) {
//                             e.element.innerText = e.element.innerText.split(': ')[1]
//                         }
//                         //console.log(e)
//                         e.element.innerHTML = e.element.innerText.match(/-$/i) ? `<span style="font-weight: 700">${fieldNames[item]}: </span>n/a` : `<span style="font-weight: 700">${fieldNames[item]}: </span>${e.element.innerText}`
//                         //e.innerText = null
//                         item % 2 == 0 ? e.element.style.backgroundColor = "#dddddd" : null
//                         e.element.style.color = "rgb(50,50,50)"
//                         e.element.style.borderRadius = "5px"
//                         e.element.style.paddingLeft = "10px"
//                     }
//                 }
//             }
//         }
//     }
// }

// document.querySelector('#search-content').addEventListener('wheel', () => {
//     let i = setInterval(() => {
//         //console.log("updating fieldName")
//         showFieldName()
//     }, 500);

//     setTimeout(() => {
//         window.clearInterval(i)
//     }, 2000)
// })
// document.addEventListener('readystatechange', () => {
//     console.log(document.readyState)
//     if (document.readyState == "complete") {
//         let i = setInterval(() => {
//             //console.log("updating fieldName")
//             showFieldName()
//         }, 500);

//         setTimeout(() => {
//             window.clearInterval(i)
//         }, 2000)
//     }
// })

const renderFieldNames = () => {
    let recordCards = document.getElementsByClassName('record-metadata')
    const fieldNames = [
        "Date Created",
        "Status",
        "Customer Name",
        "Sample Status",
        "Exclusive",
        "Exclusivity Customer",
        "eComm Customer Usage"
    ]

    let records = []

    for (var card in recordCards) {
        let obj = []
        for (let child in recordCards[card].children) {
            //console.log(recordCards[card].children[child])
            let e = recordCards[card].children[child]
            if (typeof e === 'object' && e.classList.contains('record-description')) {
                obj.push({element: e, processed: false, key: card})
            }
        }
        if (obj.length > 0) {
            records.push(obj)
        }
    }

    for (let group in records) {
        //console.log(collection.records[group])
        if (records[group].length > 0) {
            //console.log(collection.records[group])
            for (let item in records[group]) {
                let e = records[group][item]
                //console.log(e)
                if (e && e.processed === false) {
                    e.processed = true
                    if (e.element.innerText.match(/:\s/g)) {
                        e.element.innerText = e.element.innerText.split(': ')[1]
                    }
                    //console.log(e)
                    e.element.innerHTML = e.element.innerText.match(/-$/i) ? `<span style="font-weight: 700">${fieldNames[item]}: </span>n/a` : `<span style="font-weight: 700">${fieldNames[item]}: </span>${e.element.innerText}`
                    //e.innerText = null
                    item % 2 == 0 ? e.element.style.backgroundColor = "#dddddd" : null
                    e.element.style.color = "rgb(50,50,50)"
                    e.element.style.borderRadius = "5px"
                    e.element.style.paddingLeft = "10px"
                }
            }
        }
    }
}

// function rafAsync() {
//     return new Promise(resolve => {
//         requestAnimationFrame(resolve); //faster than set time out
//     });
// }

// function checkElement(selector) {
//     if (document.querySelector(selector) === null) {
//         return rafAsync().then(() => checkElement(selector));
//     } else {
//         return Promise.resolve(true);
//     }
// }
// checkElement('.record-items') //use whichever selector you want
// .then((element) => {
//     let currentCount = 0;
//      console.log(element);
//      const obsvr = new MutationObserver((mutations) => {
//          mutations.forEach(mutation => {
//             let recordCards = document.getElementsByClassName('record-metadata')
//             if ((recordCards.length - currentCount > 20)) {
//                 currentCount = 0
//             }
//             if (recordCards.length > currentCount) {
//                 //console.log(currentCount)
//                 currentCount = recordCards.length
//                 const fieldNames = [
//                     "Date Created",
//                     "Status",
//                     "Customer Name",
//                     "Sample Status",
//                     "Exclusive",
//                     "Exclusivity Customer",
//                     "eComm Customer Usage"
//                 ]
            
//                 //let records = []
//                 //console.log(recordCards)
//                 for (let card of recordCards) {
//                     let childIndex = 0
//                     for (let child of card.children) {
//                         if(!child.getAttribute('processed')) {
//                             child.setAttribute('processed', true)
//                         }
//                         else {
//                             break
//                         }
//                         //console.log(child)
//                         if (child.classList.contains('record-description')) {
//                             //console.log(child.innerHTML)
//                             if (child.innerText.match(/:\s/g)) {
//                                child.innerText = child.innerText.split(': ')[1]
//                             }
//                             if (child.innerText.match(/-$/i)) {
//                                 child.innerHTML = `<span style="font-weight: 700">${fieldNames[childIndex]}: </span>n/a` 
//                             }
//                             else {
//                                 child.innerHTML = `<span style="font-weight: 700">${fieldNames[childIndex]}: </span>${child.innerText}`
//                             }
                            
//                             childIndex % 2 == 0 ? child.style.backgroundColor = "#dddddd" : null
//                             child.style.color = "rgb(50,50,50)"
//                             child.style.borderRadius = "5px"
//                             child.style.paddingLeft = "10px"
//                             childIndex++
//                             //console.log(childIndex)
//                         }
//                     }
//                 }
//             }
//         })
//      })
//      obsvr.observe(document.querySelector('.record-items'), {
//          subtree: true,
//          childList: true
//      })
// })

   
    const targetNode = document.querySelector('#search-content') 
    // create a new instance of `MutationObserver` named `observer`,
    // passing it a callback function
    const observer = new MutationObserver((mutationList) => {
        let currentCount = 0;
        mutationList.forEach((mutation, index) => {
            //console.log(mutation.type)
            if (mutation.type === "attributes" 
                && (mutation.target.firstChild?.children[2]?.children[1]?.classList.value.match(/record-items/)
                    || mutation.target.firstChild?.children[6].classList.value.match(/record-items/)
                    )
            ) {
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
        })
    });

    observer.observe(targetNode, {
        subtree: false,
        childList: true, 
        attributes: true,
        attributeOldValue: true
        //attributeFilter: [""]

    });