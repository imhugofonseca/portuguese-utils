/**
 * Validates if postal code is in the valid format
 * @param {string} postalCode 
 */
export default function isValidPostalCode(postalCode) {
    return /^\d{4}\-\d{3}$/g.test(postalCode)
}