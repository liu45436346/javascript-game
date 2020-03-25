
var craetHtml = function () {
    let result = ''
    for (let key in config) {
        let item = config[key]
        let dataValue = 'config.' + key + '.value'
        let html = `
            <div>
                <label>
                    <input data-value="${dataValue}" class="auto-slider" type="range" value="" max="300">
                    ${item.text}:<span class="ui-label"></span>
                </label>
            </div>
            `
        result += html
    }
    document.body.insertAdjacentHTML('beforeend', result)
}

var es = (sel) => document.querySelectorAll(sel)

var bindAll = (sel, eventName, callBack) => {
    var l = es(sel)
    for (let i = 0; i < l.length; i++) {
        const e = l[i];
        e.addEventListener(eventName, function (event) {
            callBack(event)
        })

    }
}



var __main = function () {
    craetHtml()
    bindAll('.auto-slider', 'input', function (event) {
        var target = event.target
        var dataValue = target.dataset.value
        var val = target.value
        console.log('dataValue', dataValue)
        eval(dataValue + '='+ val)
        var label = target.closest('label').querySelector('.ui-label')
        label.innerText = val
    })
}

__main()
