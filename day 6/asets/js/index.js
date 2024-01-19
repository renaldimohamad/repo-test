let isOpen = false
function openHumberger() {
    let humburgerNavContainer = document.getElementById("humbergerNavContainer")
    console.log('aman')

    if (!isOpen) {
        humburgerNavContainer.style.display = "block"
        isOpen = true
    } else {
        humburgerNavContainer.style.display = "none"
        isOpen = false
    }
}