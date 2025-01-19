/**
 * Formats a number as a price with the Moroccan Dirham currency
 * @param {number} amount - The amount to format
 * @param {boolean} [showCents=false] - Whether to show decimal places
 * @returns {string} Formatted price string
 */
export const formatPrice = (amount, showCents = false) => {
  const formatter = new Intl.NumberFormat('fr-MA', {
    style: 'decimal',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  })

  return `${formatter.format(amount)} DH`
}

/**
 * Parses a price string back to a number
 * @param {string} priceString - The price string to parse (e.g., "1,234 DH")
 * @returns {number} The parsed amount
 */
export const parsePrice = (priceString) => {
  const numericString = priceString.replace(/[^\d,]/g, '').replace(',', '')
  return parseInt(numericString, 10)
} 