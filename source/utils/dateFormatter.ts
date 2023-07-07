export const dateFormatter = (date: Date): string => {
  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];

  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`;
};
