export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "computerphobe",
      link: "https://github.com/computerphobe",
    },
    {
      medium: "email",
      username: "aryanbharadiyak2006@gmail.com",
      link: "mailto:aryanbharadiyak2006@gmail.com",
    },

    {
      medium:"medium",
      username:"aryanbharadiyak2006",
      link: "https://medium.com/@aryanbharadiyak2006"
    },
    
    {
      medium: "linkedin",
      username: "aryan",
      link: "https://www.linkedin.com/in/aryan-bharadiya-596585210/",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
