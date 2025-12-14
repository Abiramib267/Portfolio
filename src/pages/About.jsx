import "../App.css"; 
export default function About() {
  return (
    <div className="about-container" style={{ '--about-bg': '#f7f0fd' }}>   
       <h1 className="text-2xl font-bold mb-4">About Me</h1>

      <p className="text-gray-700 mb-6">
        I am Abirami, a dedicated Full Stack Developer passionate about building complete, modern web applications.
        I work confidently across both front-end and back-end development, combining creativity with technical expertise.
        On the front end, I design responsive and interactive user interfaces using HTML, CSS, JavaScript, and React,
        while on the back end I develop scalable solutions with PHP, Laravel, and MySQL.
      </p>

      <h2 className="text-lg font-semibold mt-6">Personal Details</h2>
      <ul className="list-none space-y-1">
        <li><b>Name:</b> ABIRAMI B</li>
        <li><b>Email:</b> abiramib267@gmail.com</li>
        <li><b>Phone:</b> +91 6382984479</li>
        <li><b>Location:</b> Madurai, India</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6">Education</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><b>Degree:</b> Bachelor of Science in Computer Science (B.Sc CS)</li>
        <li><b>Year of Passing:</b> 2022–2025</li>
        <li><b>Institution:</b> Mangayarkarasi College of Arts and Science for Women, Madurai</li>
        <li>Full Stack PHP Developer</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6">Skills</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>PHP, Laravel</li>
        <li>JavaScript, ReactJS</li>
        <li>HTML, CSS</li>
        <li>MySQL</li>
      </ul>
    </div>
    
  );
}
