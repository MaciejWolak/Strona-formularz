function przeslij() {
    const name = document.forms["form"].name.value;
    const surname = document.forms["form"].surname.value;
    const email = document.forms["form"].email.value;
    const telephone = document.forms["form"].telephone.value;
    let gender = "";
    for(let i=0; i<document.forms["form"].gender.length; i++){
        if(document.forms["form"].gender[i].checked) gender = document.forms["form"].gender[i].value;
    }
    const obywatelstwo = document.forms["form"].elements["checkbox"].checked ? "tak" : "nie"

    const lista = document.forms["form"].elements["lista"].value;

    const textarea = document.forms["form"].textarea.value;

    document.getElementById("wynik_name").innerHTML = name;
    document.getElementById("wynik_surname").innerHTML = surname;
    document.getElementById("wynik_email").innerHTML = email;
    document.getElementById("wynik_telephone").innerHTML = telephone;
    document.getElementById("wynik_gender").innerHTML = gender;
    document.getElementById("wynik_pl").innerHTML = obywatelstwo;
    document.getElementById("wynik_lista").innerHTML = lista;
    document.getElementById("wynik_tekst").innerHTML = textarea;

}
