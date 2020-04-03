/**
 * Date: 2020-04-03
 * Version: 1
 * Author: Gabriel Martins
 * https://github.com/gabtec
 *
 * Description:
 * ------------
 * Validates a portuguese Heath System, Nacional Patient Number (NNU)
 *
 * Documentation:
 * --------------
 *    Rules: Decreto-Lei n.º 198/95 artº 6 nº 2
 *    Decreto-Lei n.º 48/97 (new address, same number)
 *    Portaria n.º 161-A/97 (new dimentions, isenções)
 *    Portaria n.º 981/95 nº 4 (defines algorithm MOD 11-2, ISO7064)
 *      mathematical details @https://www.eurocode.org/guides/checkdig/english/examples.html
 *    Códigos do 1º digito @http://www.acss.min-saude.pt/wp-content/uploads/2017/08/Regulamento-Registo-Nac.-Utentes.pdf
 */

/**
 * Validates a portuguese Heath System, Nacional Patient Number (NNU)
 * @param {String} nnu
 */
export default function isValidNNU(nnu) {
  if (typeof nnu !== 'string') {
    return false
  }

  // Must have 11 digits
  // 1st digit must be 1=singular person, OR 2=collective person
  if (!/^[1-7|9]\d{8}$/g.test(nnu)) {
    return false
  }

  const arrayNNU = nnu.split('').map(sp => parseInt(sp, 10))
  let rest = 10 // Must start as 10
  const loops = arrayNNU.length - 1 // Remove last digit because is the control
  let i = 0

  for (i; i < loops; i++) {
    let k = 0
    const sum = arrayNNU[i] + rest
    // MOD 10
    k = sum < 11 ? sum : sum - 10

    let doble = k * 2

    rest = doble < 11 ? doble : doble - 11
  }

  const control = (11 - rest) % 10

  return control === arrayNNU[loops] ? true : false
}
