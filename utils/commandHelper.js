const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "blog",
    description:"My blog"
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Aryan. I am ${getAge(
    "December 25, 2005"
  )} and I\'m a cyber security researcher
    <br/><br/>
    I love scripting in bash Python and solving capture the flags, and learning about anything new that technology has to offer
    <br /><br />
    I am a freshman at <a href="https://marwadiuniversity.ac.in/" target="_blank">Marwadi university</a>.
    <br />
  `,
  education:
    () => `I am a high school graduate from Kendriya vidyalaya, Jamnagar and a freshman at <a href="https://marwadiuniversity.ac.in/" target="_blank"> Marwadi university</a> .`,
  skills: () => `
  I am experienced with scripting in multiple languages like python, rust ,bash:<br />
  <div class="skill"><b>core</b>: Networking, scripting, malware analysis, reverse engineering<br /></div>
  <div class="skill"><b>Tools</b>: metasploit framework, wireshark, burpsuite <br /></div>
  I also have knowledge of basic IoT Devices and their working projects related to it can be found <a href="https://github.com/computerphobe" target="_blank">here</a>.
<br /><br />
  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("https://www.linkedin.com/in/aryan-bharadiya-596585210/", "_blank");
    return "";
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://medium.com/@aryanbharadiyak2006/", "_blank");
    return "";
  },
  youtube: () => {
    window.open("https://youtube.com/@livecode247", "_blank");
    return "";
  },
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
