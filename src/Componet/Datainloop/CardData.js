import Card from "./Crad";

function CardData() {
  const student = [
    { Name: "Prit", Email: "test@gmail.com", Mo: 8530158956 },
    { Name: "sanket", Email: "sanket@gmail.com", Mo: 2596378125 },
    { Name: "Pg", Email: "Pg@gmail.com", Mo: 8530145656 },
    { Name: "tets", Email: "Pgd@gmail.com", Mo: 85552145656 },
    { Name: "qqwPg", Email: "Pgd@gmail.com", Mo: 89530145656 },
    { Name: "ddPg", Email: "Pddg@gmail.com", Mo: 8998914656 },
  ];
  return (
    <>
      {student.map((item) => (
        <>
          <Card data={item} />
        </>
      ))}
    </>
  );
}

export default CardData;
