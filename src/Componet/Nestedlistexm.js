function Nested() {
  const std = [
    {
      name: "prit",
      email: "test@gmail.com",
      Add: [
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
      ],
    },
    {
      name: "pg",
      email: "test@gmail.com",
      Add: [
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
      ],
    },
    {
      name: "test",
      email: "test@gmail.com",
      Add: [
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
      ],
    },
    {
      name: "raj",
      email: "test@gmail.com",
      Add: [
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
        { hn: 123, city: "Surat" },
      ],
    },
  ];
  return (
    <>
      {std.map((data) => (
        <>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
          {data.Add.map((da) => (
            <>
              <h1>{da.city}</h1>
            </>
          ))}
        </>
      ))}
    </>
  );
}

export default Nested;
