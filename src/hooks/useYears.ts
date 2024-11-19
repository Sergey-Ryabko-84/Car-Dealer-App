export const useYears = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);
  const yearOptions = years.map((year) => ({ id: year, name: year.toString() }));

  return { yearOptions };
};
