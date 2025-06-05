import projects from "./projects";

export default function Resume() {
  const projectList = projects.map((project) => (
    <div key={project.id}>
      <div className="project text-sm">
        <div className="font-bold flex justify-between">
          <a href={project.href} target="_blank">
            {project.name}
          </a>
          <p className="italic">{project.madewith}</p>
        </div>
        <ul className="list-disc ml-4 text-xs">
          {project.desc.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  ));

  return (
    <div className="border border-black w-[50%] p-6">
      <h1 className="text-2xl font-bold uppercase">Sumedha Singh Rathor</h1>
      <div className="flex justify-between text-sm">
        <p>
          <b>Email:</b>{" "}
          <a href="mailto:sumedharathor@gmail.com">sumedharathor@gmail.com</a>
        </p>
        <p>
          <b>Mobile: </b> +91 9717122450
        </p>
      </div>
      <hr className="my-3" />
      <div className="grid grid-cols-3 w-full font-bold">
        <a
          href="https://www.linkedin.com/in/sumedha-singh-rathor-93874726a"
          target="_blank"
          className="text-left"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SumedhaSinghRathor"
          target="_blank"
          className="text-center"
        >
          GitHub
        </a>
        <a
          href="https://www.behance.net/sumedhasinghrathor"
          target="_blank"
          className="text-right"
        >
          Behance
        </a>
        <a
          href="https://www.hackerrank.com/profile/sumedharathor"
          target="_blank"
          className="text-left"
        >
          HackerRank
        </a>
        <a
          href="https://sumedhasinghrathor.vercel.app/"
          target="_blank"
          className="text-center"
        >
          My Personal Portfolio
        </a>
        <a
          href="https://leetcode.com/u/sumedharathor/"
          target="_blank"
          className="text-right"
        >
          LeetCode
        </a>
      </div>
      <hr className="my-3" />
      <div>
        <h1 className="text-center uppercase font-bold text-lg">
          professional summary
        </h1>
        <p className="text-xs text-justify">
          Motivated 3rd-year B.Tech CSE student with a strong foundation in
          graphic design and user experience (UX) acquired through self-directed
          learning. Proficient in creating visually engaging designs for digital
          platforms, including social media, websites, and mobile applications.
          Demonstrates excellent leadership and communication skills, with a
          passion for delivering creative, user-centric solutions.
        </p>
      </div>
      <hr className="my-3" />
      <div>
        <h1 className="text-center uppercase font-bold text-lg">education</h1>
        <div className="education text-sm">
          <div className="flex justify-between">
            <p className="font-bold">
              Kalinga Institute of Industrial Technology - 8.75 CGPA
            </p>
            <p>Bhubaneswar, Orissa</p>
          </div>
          <div className="text-xs flex justify-between">
            <p className="italic">B.Tech (CSE)</p>
            <p>September 2022 - May 2026</p>
          </div>
        </div>
        <div className="education text-sm">
          <div className="flex justify-between">
            <p className="font-bold">Modern Vidya Niketan - 78.8%</p>
            <p>Faridabad, Haryana</p>
          </div>
          <div className="text-xs flex justify-between">
            <p className="italic">SSCE - 12th (CBSE)</p>
            <p>August 2020 - March 2022</p>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        <h1 className="text-center uppercase font-bold text-lg">skills</h1>
        <table className="text-sm w-full" role="presentation">
          <tbody>
            <tr>
              <td className="w-[33%] font-bold">Programming Languages: </td>
              <td>Python, Java, MySQL, C, C++, HTML, CSS, JavaScript</td>
            </tr>
            <tr>
              <td className="w-[33%] font-bold flex justify-start items-start">
                Libraries / Frameworks:{" "}
              </td>
              <td>
                React.js, p5.js, Numpy, Pygame, Pandas, OpenCV, Matplotlib,
                scikit-Learn, GSAP, Next.js, Flask, FastAPI
              </td>
            </tr>
            <tr>
              <td className="w-[33%] font-bold flex justify-start items-start">
                Tools / Platforms:
              </td>
              <td>
                PostgreSQL, Intellij IDEA, Jupyter Notebook, Visual Studio Code,
                Adobe Creative Suite (Photoshop, Illustrator, After Effects,
                InDesign), Figma
              </td>
            </tr>
            <tr>
              <td className="w-[33%] font-bold flex justify-start items-start">
                Version Control System:
              </td>
              <td>Git, GitHub</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="my-3" />
      <div>
        <h1 className="text-center uppercase font-bold text-lg">experience</h1>
        <div className="text-sm">
          <div className="flex justify-between font-bold">
            <p>Pehchaan the Street School</p>
            <p>January 2024 - March 2024</p>
          </div>
          <div className="flex justify-between">
            <p className="italic">Graphic Design Intern</p>
            <p>Remote</p>
          </div>
          <ul className="list-disc ml-4">
            <li>
              Created over 84+ creative posts and stories for their Instagram
            </li>
            <li>
              Received 1-2 goals per week and showcase them at the end of every
              week
            </li>
            <li>Tools Used - Figma, Adobe Photoshop, Canva</li>
          </ul>
        </div>
        <br />
        <div className="text-sm">
          <div className="flex justify-between font-bold">
            <p>GAIL (India) Limited</p>
            <p>May 2024 - July 2024</p>
          </div>
          <div className="flex justify-between">
            <p className="italic">Summer Trainee</p>
            <p>Noida, Uttar Pradesh</p>
          </div>
          <ul className="list-disc ml-4">
            <li>
              Delved into SAP ABAP and gained valuable insights into its
              applications at GAIL.
            </li>
            <li>Learned about upcoming the transition from ABAP to S/4 HANA</li>
            <li>
              Crafted a 35+ page report on the migration analysis on the same
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        <h1 className="text-center uppercase font-bold text-lg">
          extracurriculars
        </h1>
        <div className="text-sm">
          <div className="flex justify-between font-bold">
            <p>E LABS</p>
            <p>January 2024 - Present</p>
          </div>
          <p className="italic">
            Assistant Lead Coordinator of the UI/UX Domain
          </p>
          <ul className="list-disc ml-4">
            <li>Created 10+ posts for the Instagram page</li>
            <li>
              Designed and prototyped the official website of the society within
              2 weeks
            </li>
            <li>
              Participated as an instructor, teaching UI/UX principles and
              responsive web design in ‘DEZ-I-NIN 2.0: Web Designing Classes’
              that had 400+ registrations with over 130+ students in attendance,
              that spanned over 3 weekends
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        <h1 className="text-center uppercase font-bold text-lg">projects</h1>
        {projectList}
      </div>
      <hr className="my-3" />
    </div>
  );
}
