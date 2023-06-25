const renderFieldValue = (value: any) => {
  if (value !== null && value !== "") {
    return value;
  } else {
    return "Indefinido";
  }
};

export { renderFieldValue };
