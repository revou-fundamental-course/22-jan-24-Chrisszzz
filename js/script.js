function validateForm() {
    const namee = document.forms["msgform"]["name"].value;
    const emaill = document.forms["msgform"]["email"].value;
    const interestt = document.forms["msgform"]["intr"].value;

    if (namee=="" || emaill=="" || interestt=="") {
        alert("tidak boleh kosong");
        return false;
    }

    

}



