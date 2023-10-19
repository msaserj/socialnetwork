export const BeautyDate = (date?: Date) => {
  return new Date(date ? date : '').toLocaleString('en', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

export function dateAgo(lastDialogActivityDate: Date): string {
  const now = new Date();
  const activityDate = new Date(lastDialogActivityDate);

  // Устанавливаем часовой пояс пользователя
  activityDate.setTime(activityDate.getTime() - activityDate.getTimezoneOffset() * 60 * 1000);

  // Разница в миллисекундах
  const timeDifference = now.getTime() - activityDate.getTime();
  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  const oneMonth = 30 * oneDay;
  const oneYear = 365 * oneDay;

  if (timeDifference < oneHour) {
    // Менее часа назад
    const minutesAgo = Math.floor(timeDifference / oneMinute);
    return `${minutesAgo} min. ago`;
  } else if (timeDifference < oneDay) {
    // От часа до 24 часов назад
    const hoursAgo = Math.floor(timeDifference / oneHour);
    return `${hoursAgo} hours ago`;
  } else if (timeDifference < oneMonth) {
    // От 24 часов до 30 дней назад
    const daysAgo = Math.floor(timeDifference / oneDay);
    return `${daysAgo} days ago`;
  } else if (timeDifference < oneYear) {
    // От 30 дней до 365 дней назад
    const monthsAgo = Math.floor(timeDifference / oneMonth);
    return `${monthsAgo} months ago`;
  } else {
    // Больше 365 дней назад
    const day = activityDate.getDate();
    const month = activityDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const year = activityDate.getFullYear();

    // Форматируем дату как "dd.mm.yyyy"
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  }
}

// export const dateAgo = (date: any) => {
//   const time: number = Math.ceil(new Date().getTime() - new Date(date).getTime());
//   const last = Math.ceil(time / 1000);
//   if (last < 60) {
//     return last + ' min. ago';
//   } else if (last > 60 && last < 1440) {
//     return Math.ceil(last / 60) + ' h ago';
//   } else if (last > 1440 && last < 43200) {
//     return Math.ceil(last / 1440) + ' days ago';
//   } else if (last > 43200 && last < 518400) {
//     return Math.ceil(last / 43200) + ' months ago';
//   } else if (last > 518400) {
//     return new Date(date).toLocaleString('en', {
//       day: 'numeric',
//       month: 'numeric',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: false
//     });
//   }
// };
export const isOnline = (date: any) => {
  const time: number = Math.ceil(new Date().getTime() - new Date(date).getTime());
  return Math.ceil(time / 1000000) < 15;
};
