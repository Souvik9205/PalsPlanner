import React from "react";

function Calendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const today = currentDate.getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthName = monthNames[currentMonth];

  const daysInMonth = [];
  for (let i = 1; i <= totalDaysInMonth; i++) {
    daysInMonth.push(i);
  }
  const emptySlots = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptySlots.push(i);
  }

  return (
    <div className="pt-5">
      <div className="py-2 pt-8">
        <h1 className="text-3xl font-medium text-center">Calender</h1>
      </div>
      <div className="p-1  mx-2 bg-white">
        <div className="w-full justify-center">
          <h1 className="text-xl text-center font-medium p-3">
            {currentMonthName}/{currentYear}
          </h1>
          <div className="grid grid-cols-7 text-center font-medium text-sm bg-[#BDE0FE]">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-1 p-2">
            {emptySlots.map((slot, index) => (
              <div key={index}></div>
            ))}
            {daysInMonth.map((day, index) => (
              <div
                key={index}
                className={`p-2 text-center font-mono font-medium text-gray-600 ${
                  day === today ? "bg-green-300 rounded-full" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
