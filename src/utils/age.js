export function getAge() {

  const birthday = new Date("2004-04-18");

  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();

  const month = today.getMonth() - birthday.getMonth();

  if (
    month < 0 ||
    (month === 0 && today.getDate() < birthday.getDate())
  ) {

    age--;

  }

  return age;

}