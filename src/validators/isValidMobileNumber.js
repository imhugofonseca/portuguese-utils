/**
 * Validates a portuguese mobile phone number
 * @param {String} mobileNumber 
 */
export default function isValidMobileNumber(mobileNumber) {
    return /^9(0|1|2|3|6)\d{7}$/g.test(mobileNumber)
}