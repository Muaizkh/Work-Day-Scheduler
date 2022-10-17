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
// to change time from AM to PM rather than a 24 hr clock
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
// added a place to put save button as well as textarea that will be needed to save what you are adding
    presentTime.append(`
    <div>
    <div class ="col 2 hourOfDay"> ${time}</div>
    <textarea id= "text" class=" bg- ${backgroundcolor}text-black"> ${text}</textarea>
    <button class = "saveButton justify-content-center d-flex align-items-center" data-row =${row}>
    <i type ="submit" class = "save"></i>
    </button>
    </div>
    `)
    row += i
// setting up the saveButton and allowing for it to save into a row and allowing the children of that row hold the local storage
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
// displays the current date
    let date = moment() 
    $('#dtime').text(today.format ("mm,dd,yy"))

    let dTime = $('#dtime')
}