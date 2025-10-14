function checkEmail()
{
    // check textboxes to ensure they are not empty
    // check to ensure text in both boxes are same

    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "")
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
    }

    // check to confirm textbox is empty
    if(email == "")
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("confirm-error").innerHTML = "";
    }

    // check if both textboxes have the same value
    if(email != confirm) // if the two strings are not equal
    {
        // print error
        document.getElementById("email-error").innerHTML = "both emails must be the same";
        document.getElementById("confirm-error").innerHTML = "both emails must be the same";
    }
}

function pizzaOrder()
{
    var output = "<h3>Pizza Order: ";

    // radio buttons
    if(document.getElementById("small").checked == true)
    {
        output += " Small: ";
    }
    else if(document.getElementById("medium").checked == true)
    {
        output += " Medium: ";
    }
    else
    {
        output += " Large: ";
    }

    // checkboxes
    if(document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni ";
    }
    if(document.getElementById("sausage").checked == true)
    {
        output = output + " Sausage ";
    }
    if(document.getElementById("mushroom").checked == true)
    {
        output = output + " Mushroom ";
    }

    // output statement
    document.getElementById("output").innerHTML = output + "</h3>";
}