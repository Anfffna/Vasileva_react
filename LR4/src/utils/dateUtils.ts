export const getTodoColor = (deadline: string, completed: boolean): string => {
    if (completed) return 'gray';
  
    const now = new Date();
    const dueDate = new Date(deadline);
    const timeDiff = dueDate.getTime() - now.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
  
    if (timeDiff < 0) return 'red'; // Дедлайн прошел
    if (timeDiff <= oneDay) return 'yellow'; // Остался 1 день
    return 'green'; // Много времени
  };
  