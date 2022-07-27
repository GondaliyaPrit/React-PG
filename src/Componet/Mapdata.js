function Mapdata() {
  const std = [
    { name: "prit", email: "test@gmail.com", number: 85301255 },
    { name: "prit", email: "tsasasaest@gmail.com", number: 85301255 },
    { name: "prit", email: "tsaasatgyuest@gmail.com", number: 85301255 },
    { name: "prit", email: "test1222@gmail.com", number: 85301255 },
  ];
  return (
    <>
      {std.map((datas) => (
        <h1>{datas.email}</h1>
      ))}
    </>
  );
}

export default Mapdata;
