let row = 0;
let date = new Date();

// the id for timeSelect elemets that need to be added

let timeSelect = $("#timeSelect")
for (let i = 9; i<=17; i++){
    let time= i;
    let presentTime = `${td.Hours()}`;
let backgroundColor = ""
    if(time < presentTime) {
        backgroundColor = 'dark'
    } else if (time == presentTime) {
        backgroundColor = 'red'
    }else {
        backgroundColor = 'success'
    }

    if(i<12){
        time += 'AM'
    } else if (i ==12){
        time += 'PM'
    } else {
        time -=12
        time =+ 'PM'
    }
    let text
    if(localStorage.getItem(row)=== null) {
        text =''
    } else {
        text = localStorage.getItem(row)
    }

    presentTime.append

    let saveButton = $('.saveButton')
    saveButton.on ('click', function (event){
        event.preventDefault()

        let numberClicked = $(this).attr('data-row')
        console.log(this).attr('data-row')
        

        let row = timeSelect.children().eq(numberClicked)

        let textRow = row.children('textarea').val()

        if (textAreaRow !== ''){
            localStorage.setItem(numberClicked, textRow)
        }
    })

    let date = moment() 
    $('#dtime').text(today.format ("mm/dd/yy"))

    let dTime = $('#dtime')
}