export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

  export const formatCurrency = (amount) => {
    if (!amount) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  export const formatDuration = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  export function formatNumberShort(number) {
    if (number >= 1_000_000_000) {
      const billions = Math.floor(number / 1_000_000_000);
      return `${billions.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} B`;
    } else if (number >= 1_000_000) {
      const millions = Math.floor(number / 1_000_000);
      return `${millions.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} M`;
    } else if (number >= 1_000) {
      const thousands = Math.floor(number / 1_000);
      return `${thousands.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} K`;
    } else {
      return number.toString();
    }
  }
