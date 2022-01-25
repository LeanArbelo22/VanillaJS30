const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
console.log(checkboxes);
let lastCheck;
function handleCheck(e) {
    //console.log(e);
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(check => {
            console.log(check);
            if(check === this || check === lastCheck){
                inBetween = !inBetween;
                console.log('comprobando elementos entre medio');
            }

            if(inBetween) {
                check.checked = true
            }
        })
    }

    lastCheck = this;

}
checkboxes.forEach(check => check.addEventListener('click', handleCheck))