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
  about: () => `I'm Aryan Bharadiya — a drone engineer, embedded systems specialist, AI researcher, and robotics architect passionate about building autonomous systems that bridge the gap between imagination and reality.</br></br> My expertise spans Pixhawk, Jetson Nano, MAVLink, ROS, SLAM, object detection, and real-time mission planning, with a strong focus on creating intelligent aerial platforms.

Beyond robotics, I dive deep into cybersecurity—developing honeypots, custom WAFs, OSINT toolkits, and advanced network monitoring solutions.</br></br>
 I believe in engineering systems that are not only high-performing but also resilient against evolving threats.</br></br>

Whether it's designing a compliant suspension for a search-and-rescue rover, optimizing AI inference on edge devices, or architecting secure, scalable software, I approach every project with precision, creativity, and a relentless drive to solve problems that matter.</br></br>

When I'm not deep in code or CAD models, you'll find me in the gym, learning guitar, or exploring new challenges that push both my technical and creative boundaries.
  `,
  education:
    () => `I am a high school graduate from Kendriya vidyalaya, Jamnagar and a second year student at <a href="https://marwadiuniversity.ac.in/" target="_blank"> Marwadi university</a> .`,
  skills: () => `
<h2>Skills</h2>
Cybersecurity:

Web Application Security (Custom WAF, OWASP Top 10, SQL Injection, XSS, CSRF)

Network Security (Packet Sniffing, Threat Signature Matching, Honeypots)

OSINT Techniques & Threat Intelligence Aggregation
</br></br>
Programming & Development:

Languages: C++, Python, Java

Backend: Node.js, Express.js

Frontend: React.js, Tailwind CSS

Databases: MySQL, MongoDB

Scripting & Automation: Bash, Python scripts
</br></br>
AI & Machine Learning:

LLM Integration, Prompt Engineering

Computer Vision (OpenCV, YOLO, TensorFlow)

Generative AI (Stable Diffusion, DALL·E, Bark, ElevenLabs)
</br></br>
Networking & Systems:

TCP/IP, UDP, Socket Programming

Linux System Administration

API Development & Integration
</br></br>
Tools & Platforms:

Git, GitHub, Docker

Wireshark, Burp Suite, Nmap

FFmpeg, MoviePy
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
