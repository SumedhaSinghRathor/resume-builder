"use client";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Build() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const stuff = [
    {
      question: "Important Stuff",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci lectus, ac congue nunc feugiat dignissim. Pellentesque quis urna ante. Etiam sed fringilla augue, quis pharetra tellus. Proin cursus nisi nisl, dapibus luctus risus auctor a. Phasellus pretium consequat massa, sed convallis dolor viverra sed. Donec sagittis quam sit amet massa luctus rutrum. Quisque posuere diam dui, a hendrerit orci varius id. Nam porta mi vitae eros finibus semper. Nulla pharetra sodales lorem, vel eleifend purus mollis vitae. Sed vel lobortis arcu. Proin pharetra justo vitae placerat finibus.",
    },
    {
      question: "Professional Summary",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci lectus, ac congue nunc feugiat dignissim. Pellentesque quis urna ante. Etiam sed fringilla augue, quis pharetra tellus. Proin cursus nisi nisl, dapibus luctus risus auctor a. Phasellus pretium consequat massa, sed convallis dolor viverra sed. Donec sagittis quam sit amet massa luctus rutrum. Quisque posuere diam dui, a hendrerit orci varius id. Nam porta mi vitae eros finibus semper. Nulla pharetra sodales lorem, vel eleifend purus mollis vitae. Sed vel lobortis arcu. Proin pharetra justo vitae placerat finibus.",
    },
    {
      question: "Education",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci lectus, ac congue nunc feugiat dignissim. Pellentesque quis urna ante. Etiam sed fringilla augue, quis pharetra tellus. Proin cursus nisi nisl, dapibus luctus risus auctor a. Phasellus pretium consequat massa, sed convallis dolor viverra sed. Donec sagittis quam sit amet massa luctus rutrum. Quisque posuere diam dui, a hendrerit orci varius id. Nam porta mi vitae eros finibus semper. Nulla pharetra sodales lorem, vel eleifend purus mollis vitae. Sed vel lobortis arcu. Proin pharetra justo vitae placerat finibus.",
    },
    {
      question: "Skills",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci lectus, ac congue nunc feugiat dignissim. Pellentesque quis urna ante. Etiam sed fringilla augue, quis pharetra tellus. Proin cursus nisi nisl, dapibus luctus risus auctor a. Phasellus pretium consequat massa, sed convallis dolor viverra sed. Donec sagittis quam sit amet massa luctus rutrum. Quisque posuere diam dui, a hendrerit orci varius id. Nam porta mi vitae eros finibus semper. Nulla pharetra sodales lorem, vel eleifend purus mollis vitae. Sed vel lobortis arcu. Proin pharetra justo vitae placerat finibus.",
    },
    {
      question: "Experience",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci lectus, ac congue nunc feugiat dignissim. Pellentesque quis urna ante. Etiam sed fringilla augue, quis pharetra tellus. Proin cursus nisi nisl, dapibus luctus risus auctor a. Phasellus pretium consequat massa, sed convallis dolor viverra sed. Donec sagittis quam sit amet massa luctus rutrum. Quisque posuere diam dui, a hendrerit orci varius id. Nam porta mi vitae eros finibus semper. Nulla pharetra sodales lorem, vel eleifend purus mollis vitae. Sed vel lobortis arcu. Proin pharetra justo vitae placerat finibus.",
    },
    {
      question: "Projects",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci lectus, ac congue nunc feugiat dignissim. Pellentesque quis urna ante. Etiam sed fringilla augue, quis pharetra tellus. Proin cursus nisi nisl, dapibus luctus risus auctor a. Phasellus pretium consequat massa, sed convallis dolor viverra sed. Donec sagittis quam sit amet massa luctus rutrum. Quisque posuere diam dui, a hendrerit orci varius id. Nam porta mi vitae eros finibus semper. Nulla pharetra sodales lorem, vel eleifend purus mollis vitae. Sed vel lobortis arcu. Proin pharetra justo vitae placerat finibus.",
    },
  ];

  return (
    <div className="w-[50%] accordion flex flex-col gap-2">
      {stuff.map((item, i) => (
        <div className="item bg-gray-300 p-3 flex flex-col gap-2">
          <div
            className="title text-2xl font-bold flex items-center justify-between cursor-pointer"
            onClick={() => toggle(i)}
          >
            <div>
              <h2>{item.question}</h2>
            </div>
            <span>
              {selected === i ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
            </span>
          </div>
          <div
            className={`content text-justify ${
              selected === i ? "show" : "hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
