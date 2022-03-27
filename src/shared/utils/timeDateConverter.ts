export function timeDataConverter(UNIX_timestamp: number) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();

  const dateTime = date + ' ' + month + ' ' + year;
  return dateTime;
}
