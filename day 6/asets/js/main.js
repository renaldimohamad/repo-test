function submitData() {
    const inputName = document.getElementById("inputName").value
    const inputEmail = document.getElementById("inputEmail").value
    const inputPhoneNumber = document.getElementById("inputPhoneNumber").value
    const inputSubject = document.getElementById("inputSubject").value
    const inputMessage = document.getElementById("inputMessage").value

    if (inputName == '') {
        alert('the form must be filled in')
    } else if (inputEmail == '') {
        alert('the form must be filled in')
    } else if (inputPhoneNumber == '') {
        alert('the form must be filled in')
    } else if (inputSubject == '') {
        alert('the form must be filled in')
    } else if (inputMessage == '') {
        alert('the form must be filled in')
    } else {

        console.log('nama :', inputName)
        console.log('email :', inputEmail)
        console.log('phone :', inputPhoneNumber)
        console.log('subject :', inputSubject)
        console.log('message :', inputMessage)

        const emailReceiver = "renaldimohamad77@gmail.com"
        const subject = "lets talk"
        const body = "im Renaldi Mohamad nice to meet you brother"

        let a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=${body}`
        a.click(submitData)
    }
}



