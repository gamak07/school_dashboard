export function formatCurrency(amount, locale = 'en-NG', currency = 'NGN') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  }
  