import "./CSS/home.css";
const Home = () => {
  return (
    <>
      <div id="home">
        {/* <p>
          I have build a fullstack application which onboards user who can have
          two roles, admin and explorer, explorer can view his details, but
          admin can view every user and edit and delete those user, write me a
          home page and about for this project
        </p> */}
        {/* Home Page: */}
        <h1 id="welcome">Fullstack User Management Application!</h1>
        <p>
          This project represents a culmination of my skills and expertise in
          fullstack development. Designed with a focus on efficiency, usability,
          and security, this application serves as a showcase of my capabilities
          in building robust web-based solutions.
        </p>
        <h1 className="headingsss">Key Features</h1>
        <strong>User Authentication:</strong>
        <p>
          Secure user authentication ensures that only authorized individuals
          can access the system, guaranteeing the privacy and integrity of user
          data.
        </p>
        <strong>Role-based Access Control: </strong>
        <p>
          Two distinct user roles, namely 'admin' and 'explorer', enable
          granular control over permissions and privileges, enhancing security
          and usability.
        </p>
        <strong>User Profile Management:</strong>
        <p>
          Explorers can conveniently view and manage their profile details,
          providing a personalized experience tailored to their needs.
        </p>
        <strong>Admin Dashboard:</strong>
        <p>
          Administrators enjoy a comprehensive dashboard where they can view,
          edit, and delete user accounts, facilitating efficient user
          management.
        </p>
        {/* <strong>Responsive Design: </strong>
        <p>
          The application features a responsive design, ensuring seamless
          functionality across various devices and screen sizes.
        </p> */}
        <strong className="headingsss"> Tech Stack </strong>
        <p>
          Leveraging a combination of frontend and backend technologies, this
          application demonstrates my proficiency in fullstack development.
          <ul id="techstack">
            <li>HTML</li>
            <li> CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Mongoose ODM</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Bcrypt JS Library</li>
            <li>JWT(Json Web Tokens) JS Library</li>
          </ul>
        </p>
        <h1 className="headingsss">About Me:</h1>
        <p>
          I am a passionate and skilled fullstack developer dedicated to
          crafting high-quality, user-centric web applications. With a strong
          foundation in both frontend and backend technologies, I specialize in
          building dynamic and scalable solutions tailored to meet the unique
          requirements of my clients.
        </p>
        <p>
          This project serves as a testament to my capabilities, showcasing my
          ability to design and develop robust applications that deliver
          tangible value. From concept to deployment, I am committed to
          excellence in every aspect of the development process, ensuring that
          my clients receive solutions that exceed their expectations.
        </p>
        <p>
          Thank you for visiting my Fullstack User Management Application. If
          you have any questions or would like to learn more about my skills and
          services, please don't hesitate to get in touch
          <a id="homeEmail" href="vinaygouda.meti16@gmail.com">
            {" "}
            me
          </a>
          . I look forward to the opportunity to collaborate with you and bring
          your ideas to life.
        </p>
      </div>
    </>
  );
};

export default Home;
