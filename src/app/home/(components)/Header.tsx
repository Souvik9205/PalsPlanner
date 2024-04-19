import React from "react";

function Header() {
  const date = new Date();
  const currentDayIndex = date.getDay();

  const sundayDate = new Date(date);
  sundayDate.setDate(date.getDate() - currentDayIndex);

  const weekDays = [
    { day: "Sun", date: sundayDate.getDate() },
    { day: "Mon", date: sundayDate.getDate() + 1 },
    { day: "Tue", date: sundayDate.getDate() + 2 },
    { day: "Wed", date: sundayDate.getDate() + 3 },
    { day: "Thu", date: sundayDate.getDate() + 4 },
    { day: "Fri", date: sundayDate.getDate() + 5 },
    { day: "Sat", date: sundayDate.getDate() + 6 },
  ];
  return (
    <div className="bg-[#F4D8F9]">
      <h1 className="flex justify-center py-1 pt-8 text-lg font-sans font-semibold">
        Today
      </h1>
      <div className="px-3 py-2">
        <div className="flex flex-row flex-wrap justify-between w-full max-w-screen-lg mx-auto">
          {weekDays.map((item, index) => (
            <div
              key={index}
              className={`w-1/7 p-1  ${
                currentDayIndex === index ? "bg-[#C67ED2]" : "bg-[#E7C3ED]"
              } rounded-lg`}
            >
              <p className="flex justify-center">{item.day}</p>
              <div className=" p-2 rounded-full bg-[#F5F5F5]">
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
