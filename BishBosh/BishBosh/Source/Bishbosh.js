function setfields() {
    var bish = Math.floor(frm1["bish"].value);
    var bosh = Math.floor(frm1["bosh"].value);
    var loopval = Math.floor(frm1["loopval"].value);

    if (loopval == 0) {

        alert("Error");
    }

    var output = "";
    for (var i = 1; i <= loopval; i++) {
        if (i % bosh == 0 && i % bish == 0) {
            output += " Bish_Bosh \t\t";

        }

        else if (i % bish == 0) {
            output += "Bish \t\t";

        }

        else if (i % bosh == 0) {
            output += "Bosh \t\t";

        }
        else {
            output += "\t\t" + i;
        }
    }
    document.getElementById("demo").innerHTML += output;
}
