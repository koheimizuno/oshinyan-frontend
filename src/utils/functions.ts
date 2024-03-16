export const isNewUtil = (created_date: string) => {
  const created_date_stamp = Date.parse(created_date);
  const current_dateObj = new Date();
  if (current_dateObj.getTime() - created_date_stamp < 86400000) return true;
};

export const formatDateTime = (value: string) => {
  let date = new Date(value);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};
