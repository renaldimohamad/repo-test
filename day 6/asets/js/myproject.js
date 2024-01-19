let datamyProject = []

function getDaysDifference(startDate, endDate) {

    const startDateObj = new Date(startDate)
    const endDateObj = new Date(endDate)

    const FORMULA = (1000 * 60 * 60 * 24)

    const timeDifference = endDateObj.getTime() - startDateObj.getTime()

    const daysDifference = timeDifference / FORMULA;

    return daysDifference;
}

function resetForm() {
    document.getElementById('inputName').value = ""
    document.getElementById('startDate').value = ""
    document.getElementById('endDate').value = ""
    document.getElementById('inputDescription').value = ""
}

function submitBlog() {
    console.log("data terkirim silahkan cek di dasboard anda")

    const startDateValue = document.getElementById('startDate').value
    const endDateValue = document.getElementById('endDate').value

    if (startDateValue == '') {
        alert('The Start Date must be filled in')
    } else if (endDateValue == '') {
        alert('The End Date must be filled in')
    } else {


        const daysDifference = getDaysDifference(startDateValue, endDateValue)


        let inputName = document.getElementById("inputName").value
        let inputDescription = document.getElementById("inputDescription").value
        let inputImage = document.getElementById("inputImage").files
        const nodeJs = document.getElementById("nodeJs").checked
        const nextJs = document.getElementById("nextJs").checked
        const reactJs = document.getElementById("reactJs").checked
        const phython = document.getElementById("phython").checked



        const test = document.getElementsByName('techs')
        test.forEach(item => {
            item.checked = false
            console.log('check item: ', item.checked)
        })

        inputImage = URL.createObjectURL(inputImage[0])
        console.log(inputImage)

        const detailMyProject = {
            durationDate: daysDifference,
            name: inputName,
            description: inputDescription,
            image: inputImage,
            posAt: "10 oktober 2020",
            nodeJs,
            nextJs,
            reactJs,
            phython,
            author: "Renaldi Mohamad"
        }


        datamyProject.push(detailMyProject)

        // Untuk reset form
        resetForm()

        renderBlog()

    }



    function renderBlog() {
        document.getElementById("contents").innerHTML = ""

        for (let index = 0; index < datamyProject.length; index++) {
            let renderTechIcons = ''

            if (datamyProject[index].nodeJs) {
                renderTechIcons += `<i class="fa-brands fa-node"></i>`
            }

            if (datamyProject[index].nextJs) {
                renderTechIcons += `<i class="fa-brands fa-js"></i>`
            }
            if (datamyProject[index].reactJs) {
                renderTechIcons += `<i class="fa-brands fa-react"></i>`
            }
            if (datamyProject[index].phython) {
                renderTechIcons += `<i class="fa-brands fa-python"></i>`
            }

            document.getElementById("contents").innerHTML += `
            <div style="display: flex; justify-content: center; align-items: center;">
                <div style="width: 300px; border: solid 1px #d8d1d1; box-shadow: 0px 0px 3px #000; border-radius: 10px">
                    <a href="./detailmyproject.html">
                        <img src="${datamyProject[index].image}" style="height: 100px; width: 90%; margin-left: 15px; margin-top: 10px; border-radius: 7px; box-shadow: 0px 0px 1px black; "alt="">
                        
                        <h1 style="font-size: 15px; color: black; text-align: center;">Dumbways Mobile App - 2021</h1>
                        
                        <div style="padding: 12px">
                            <p style="font-size: 15px; margin-bottom: 10px; color: black;">${datamyProject[index].durationDate} Hari</p>

                            <p style="font-size: 15px; margin-bottom: 10px; color: black;">${datamyProject[index].description}</p>
                            
                            <div style="display: flex; flex-direction: row; align-items: center; gap: 14px; color: black;">
                                ${renderTechIcons}
                            </div>
                        </div>
                            
                        <div style="display: flex; flex-direction: row; gap: 20px; margin-bottom: 20px; justify-content: end; width: 100px;">
                            <img src="./icons/play-store.png" alt="" style="width: 15px;">
                            <img src="./icons/atom.png" alt="" style="width: 15px;">
                            <img src="./icons/java.png" alt="" style="width: 15px;">
                        </div>
                            
                        <div style="display: flex; justify-content: center; margin-bottom:  10px;">
                            <button style="background-color: black; color: white; width: 120px; height: 20px; margin-right: 20px; border-radius: 10px;">
                                edit
                            </button>
                                
                            <button style="background-color: black; color: white; width: 120px; height: 20px; border-radius: 10px;">
                                delete
                            </button>
                        </div>
                    </a>
                </div>
            </div>    
        `
        }

    }
} 