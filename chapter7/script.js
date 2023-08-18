/* Finish the code for the validateLength ( ) function, making
sure to pay close attention to the arguments being passed to it. */

function validateLength(minLength, maxLength, inputField, helpText){

    //See if the input contains more than minLength and less than maxLength characters
    if (inputField.value.length >= minLength && inputField.value.length <= maxLength){
        //The data is Ok, so clear the help message
        if (helpText != null)
            helpText.innerHTML = "";
        return true;
    }
    else 
    //The data is INvalid so set the help message
        if (helpText != null)
            helpText.innerHTML = "Please enter a value " + minLength + " to " + maxLength + " characters in length.";
        return false;
 }

 /* Write the code for the validateDate() function, which calls
both validateNonEmpty() and validateRegEx() to
validate the date form field in Bannerocity. Hint: The function
accepts two arguments, the date input field and its related help
text element. */

function validateDate(inputDate, helpText){
    /* 
    initial attempt ..
    var dateRegEx = /^(0[0-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/\d{4}$/;
    var helpMessage = "Please, specify the date as MM/DD/YYYY";
    //check that field is not empty
     if (validateNonEmpty(inputDate, helpText)){
        //if not empty - continue validating for Regular Expresison
        if(validateRegEx(dateRegEx, inputDate, helpText, helpMessage))
            //if matches  regular expression - date is valid
            return true;
        else
        //if doesn't match reg ex format - its an invalid date
            return false;
     }
     //if field is empty - Date is invalid
     else
        return false;
    */
       
     if (validateNonEmpty(inputDate, helpText))
        //if date field is not empty, then check if its content corresponds to regular expression
        return validateRegEx(/^(0[0-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/\d{4}$/, inputDate, helpText, "Please, specify the date as MM/DD/YYYY");
    else
        return false;
}