import React from "react";

const users = [
  {
    name: "Alice Johnson",
    city: "New York",
    age: 28,
    profession: "Software Engineer",
    profile_photo: "https://example.com/profiles/alice.jpg",
  },
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    age: 34,
    profession: "Data Analyst",
    profile_photo: "https://example.com/profiles/rahul.jpg",
  },
  {
    name: "Sophia Zhang",
    city: "Beijing",
    age: 25,
    profession: "Graphic Designer",
    profile_photo: "https://example.com/profiles/sophia.jpg",
  },
  {
    name: "Carlos Rivera",
    city: "Madrid",
    age: 40,
    profession: "Teacher",
    profile_photo: "https://example.com/profiles/carlos.jpg",
  },
  {
    name: "Emma Thompson",
    city: "London",
    age: 30,
    profession: "Marketing Specialist",
    profile_photo: "https://example.com/profiles/emma.jpg",
  },
];

const CardExtrector = () => {
  return (
    <>
      <div className="p-10">
        {users.map(function (elem) {
          return (
            <Card
              user={elem.name}
              age={elem.age}
              city={elem.city}
              profession={elem.profession}
              profile={elem.profile_photo}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default CardExtrector;
