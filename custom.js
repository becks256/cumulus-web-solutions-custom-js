class Collection {
    constructor() {
        this.records = [];
        this.totalCards = 0;
        this.setRecord = (obj) => {
            this.records.push(obj)
        }
    }
}

const collection = new Collection();

function showFieldName() {

    const recordCards = document.getElementsByClassName('record-metadata')
    const fieldNames = [
        "Date Created",
        "Status",
        "Customer Name",
        "Sample Status",
        "Exclusive",
        "Exclusivity Customer",
        "eComm Customer Usage"
    ]

    if (collection.totalCards < recordCards.length) {
        collection.totalCards = recordCards.length

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
                collection.setRecord(obj)
            }
        }
    
        for (let group in collection.records) {
            //console.log(collection.records[group])
            if (collection.records[group].length > 0) {
                //console.log(collection.records[group])
                for (let item in collection.records[group]) {
                    let e = collection.records[group][item]
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

}

document.querySelector('#search-content').addEventListener('wheel', () => {
    let i = setInterval(() => {
        //console.log("updating fieldName")
        showFieldName()
    }, 500);

    setTimeout(() => {
        window.clearInterval(i)
    }, 2000)
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