export const getConvertDateHour = (time: string) => {
  const date = new Date(time);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

export const getCalculateTimeAgo = (messageDate: string) => {
  const now = new Date();
  const messageTime = new Date(messageDate);
  const differenceInMilliseconds = now.getTime() - messageTime.getTime();

  const minutesAgo = Math.floor(differenceInMilliseconds / 60000);
  const hoursAgo = Math.floor(differenceInMilliseconds / 3600000);
  const daysAgo = Math.floor(differenceInMilliseconds / 86400000);

  if (daysAgo > 0) {
    return daysAgo === 1 ? 'hace un día' : `hace ${daysAgo} días`;
  } else if (hoursAgo > 0) {
    return hoursAgo === 1 ? 'hace una hora' : `hace ${hoursAgo} horas`;
  } else {
    return minutesAgo === 1 ? 'hace un minuto' : `hace ${minutesAgo} minutos`;
  }

};