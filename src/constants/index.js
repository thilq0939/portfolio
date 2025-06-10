const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
  ];
  
  const counterItems = [
    { value: 0, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "+", label: "Satisfied Clients" },
    { value: 4, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "./images/logos/company-logo-1.png",
    },
    {
      imgPath: "./images/logos/company-logo-2.png",
    },
    {
      imgPath: "./images/logos/company-logo-3.png",
    },
    {
      imgPath: "./images/logos/company-logo-4.png",
    },
    {
      imgPath: "./images/logos/company-logo-5.png",
    },
    {
      imgPath: "./images/logos/company-logo-6.png",
    },
    {
      imgPath: "./images/logos/company-logo-7.png",
    },
    {
      imgPath: "./images/logos/company-logo-8.png",
    },
    {
      imgPath: "./images/logos/company-logo-9.png",
    },
    {
      imgPath: "./images/logos/company-logo-10.png",
    },
    {
      imgPath: "./images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "./images/school.png",
      title: "Education",
      desc: `Ho Chi Minh City University of Transport 
Major in Information Technology.`,
    },
    {
      imgPath: "./images/house.png",
      title: "Hometown",
      desc: "Khanh Hoa, Vietnam.",
    },
    {
      imgPath: "./images/profile.png",
      title: "About Me",
      desc: `Gender: Male | Date of birth: 10/09/2002.
Phone number: 0939909393 | Email: quangthi2729@gmail.com.`,
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "./images/logos/react.png",
    },
    {
      name: "Backend Developer",
      imgPath: "./images/logos/node.png",
    },
    {
      name: "Project Manager",
      imgPath: "./images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "Frontend Developer",
      modelPath: "./models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "./models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Project Manager",
      modelPath: "./models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  const expCards = [
    {
      review:
        "React, HTML, CSS, JavaScript, Tailwind CSS",
      logoPath: "./images/user-experience.png",
      title: "Frontend Developer",
      date: "January 2025 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review:
        "Java, MySQL, Spring Framework, Hibernate, JWT, RESTful API, Git, PostMan",
      logoPath: "./images/coding.png",
      title: "Full Stack Developer",
      date: "January 2025 - Present",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "./images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "./images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "./images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "./images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "./images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "./images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
      imgPath: "./images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
      imgPath: "./images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "./images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/_quangth1/",
      imgPath: "./images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/le.quang.thi.421777",
      imgPath: "./images/fb.png",
    },
    {
      name: "github",
      url: "https://github.com/thilq0939",
      imgPath: "./images/github.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };