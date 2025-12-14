import abi from "../assets/abi.png"
export default function Home() {
  return (
    <div className="home-container">
      <img src={abi} alt="abi" />
      <h1 className="profile-heading">Abirami B</h1>
      <p className="profile-desc">
        Passionate Full Stack PHP Developer focused on clean, efficient, and modern web apps. 
        I build responsive UIs using HTML, CSS, JavaScript, and React, & scalable solutions with PHP and MySQL.
      </p>
    </div>
  );
}
