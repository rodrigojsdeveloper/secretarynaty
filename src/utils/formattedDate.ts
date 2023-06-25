const formattedDate = (date: string): string => {
  const dateObj = new Date(date);

  // Verificar se a data é válida
  if (isNaN(dateObj.getTime())) {
    return "Indefinido";
  }

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
};

export { formattedDate };
