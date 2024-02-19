export const isNewUtil = (created_date: string) => {
  const created_date_stamp = Date.parse(created_date);
  // const created_date_dateObj = new Date(created_date_stamp);
  const current_dateObj = new Date();
  // let created_date_year = created_date_dateObj.getFullYear();
  // let created_date_month = created_date_dateObj.getMonth();
  // let created_date_date = created_date_dateObj.getDate();
  if (current_dateObj.getTime() - created_date_stamp < 86400000) return true;
};

export const formatDateTime = (value: string) => {
  let date = new Date(value);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};
