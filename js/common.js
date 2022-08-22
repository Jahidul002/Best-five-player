function getFieldValueById(fieldId) {
    const theField = document.getElementById(fieldId);
    const fieldString = theField.value;
    const theFieldValue = parseFloat(fieldString);
    return theFieldValue
}
