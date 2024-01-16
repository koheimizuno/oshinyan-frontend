export const isNewUtil = (last_update: string) => {
  const last_update_stamp = Date.parse(last_update);
  const last_update_dateObj = new Date(last_update_stamp);
  const current_dateObj = new Date();
  let last_update_year = last_update_dateObj.getFullYear();
  let last_update_month = last_update_dateObj.getMonth();
  let last_update_date = last_update_dateObj.getDate();
  if (current_dateObj.getTime() - last_update_stamp < 86400000) return true;
};
