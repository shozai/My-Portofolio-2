function toggleDetail(e) {
    const target = $(e.target)
    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    const items = $(target).parents(".about-exp-items")
    const detail = $(items).children(".about-exp-items-detail")

    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const massage = $("#inp_massage")

    if(!$(email).val()) {
        alert("email is required")
    } else if (!$(subject).val()) {
        alert("subject is required")
    } else if (!$(massage).val()) {
        alert("massage is required")
    } else {
        alert("form submitted")
        $(email).val("")
        $(subject).val("")
        $(massage).val("")
    }
}
