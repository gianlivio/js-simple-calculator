/**
 * Description
 * @param {number} first
 * @param {number} second
 * @param {string} operation: somma / sottrazione / moltiplicazione / divisione
 * @returns {number}
 */
function calculate(first, second, operation) {
    let result;
    switch (operation) {
      case "somma": 
        result = first + second;
        break;
      case "sottrazione":
        result = first - second;
        break;
      case "moltiplicazione":
        result = first * second;
        break;
      case "divisione":
        result = first / second;
        break;
    }
    return result;
  }
  
  // Test
  // console.log(calculate(5, 4, "somma"));
  // console.log(calculate(5, 4, "sottrazione"));
  // console.log(calculate(5, 4, "moltiplicazione"));
  // console.log(calculate(6, 2, "divisione"));