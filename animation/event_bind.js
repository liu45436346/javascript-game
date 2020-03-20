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
bindAll('.auto-slider', 'input', function (event) {
    var target = event.target
    var dataValue = target.dataset.value
    var val = target.value
    eval(dataValue + '='+ val)
    var label = target.closest('label').querySelector('.ui-label')
    label.innerText = val
})
