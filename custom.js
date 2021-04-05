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
    var recordDescriptions = []

    for (var card in recordCards) {
        let obj = []
        for (let child in recordCards[card].children) {
            //console.log(recordCards[card].children[child])
            let e = recordCards[card].children[child]
            if (typeof e === 'object' && e.classList.contains('record-description')) {
                obj.push({element: e})
            }
        }
        recordDescriptions.push(obj)
    }

    //console.log(recordDescriptions.length)
    for (let group in recordDescriptions) {
        //console.log(recordDescriptions[group])
        if (recordDescriptions[group].length > 0) {
            for (let item in recordDescriptions[group]) {
                let e = recordDescriptions[group][item].element
                if (e) {
                    if (e.innerText.match(/:\s/g)) {
                        e.innerText = e.innerText.split(': ')[1]
                    }
                    //console.log(e)
                    e.innerHTML = e.innerText.match(/-$/i) ? `<span style="font-weight: 700">${fieldNames[item]}: </span>n/a` : `<span style="font-weight: 700">${fieldNames[item]}: </span>${e.innerText}`
                    //e.innerText = null
                    item % 2 == 0 ? e.style.backgroundColor = "#dddddd" : null
                    e.style.color = "#797979"
                    e.style.borderRadius = "5px"
                    e.style.paddingLeft = "10px"
                }
            }
        }
    }
}

document.querySelector('#search-content').addEventListener('wheel', () => {
    let i = setInterval(() => {
        console.log("updating fieldName")
        showFieldName()
    }, 1000);

    setTimeout(() => {
        window.clearInterval(i)
    }, 10000)
})
document.addEventListener('readystatechange', () => {
    console.log(document.readyState)
    if (document.readyState == "complete") {
        let i = setInterval(() => {
            console.log("updating fieldName")
            showFieldName()
        }, 500);

        setTimeout(() => {
            window.clearInterval(i)
        }, 2000)
    }
})

// var btn = document.createElement('button');
// btn.innerText = 'Show Field Names';
// btn.style.position = 'fixed';
// btn.style.bottom = '50px';
// btn.style.right = '50px'; 
// btn.style.zIndex = '999';
// btn.style.border = "solid 1px #333";
// btn.style.borderRadius = "25px";
// btn.style.padding = "12px";
// btn.style.backgroundColor = "#ffffff"
// btn.addEventListener('click', () => {
//     showFieldName()
// })
// document.body.prepend(btn)


// class Sentry {
//     constructor() {
//         this.count;
//         this.watchCount = () => {
//             setTimeout(() => {
//                 this.count = document.querySelectorAll('.recor-item').length
//             }, 10);
//         }
//     }
// }


// document.body.addEventListener('change', () => {
//     console.log('body changed')
//     if (document.querySelectorAll('.record-description').length > 0) {
//         showFieldName()
//     }
// })
// while (document.body.children.length < 1) {
//     setTimeout(() => {
//         console.log('waiting for body content to load')
//     }, 100);
// }
// if (document.querySelector('.record-items')) {
//     document.querySelector('.record-items').addEventListener('change', (e) => {
//         console.log(e)
//     })
// }