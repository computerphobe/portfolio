export async function GET(request) {
  const projects = [
    {
      name: "LineBot",
      description:
        "A Line following robot made with arduino",
      stack: ["Arduino"],
      link: "https://github.com/LineBot",
    },
    {
      name: "packet-sniffer",
      description:
        "A simple python tcp server",
      stack: ["Python"],
      link: "https://github.com/computerphobe/packet-sniffer",
    },

    {
      name: "Pharmaceutical inventory management and supply chain tracking",
      description:
        "A fully functioning website to track and manage inventory of different stakeholder in pharmaceutical supply chain",
      stack: ["python", "Django"],
      link: "https://github.com/computerphobe/postmanchallenge",
    },
    {
      name: "Python scripts",
      description:
        "Collection of all python scripts which automates the flow of hacking",
      stack: ["python"],
      link: "https://github.com/computerphobe/python_scripts",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
