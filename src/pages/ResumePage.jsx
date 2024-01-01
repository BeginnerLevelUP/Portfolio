
function ResumePage() {
    const skills = `
    HTML
    CSS
    JS
    BOOTSTRAP
    JQUERY
    EXPRESS
    SQL 
    MONGODB
    SEQUELIZE
    MONGOOSE
    REACT
    MERN STACK
    VITE 
    WEBPACK
    etc..
    `;

    // Split the skills string by newline characters
    const skillsList = skills.split('\n').filter(skill => skill.trim() !== '');

    return (
        <>
            <h1>Resume</h1>    
          <a href='"../../public/Resume.pdf"' download="Resume.pdf">Link To Resume</a>
            <h2>Developer Skills</h2>
            <ul>
                {skillsList.map((skill, index) => (
                    <li key={index}>{skill.trim()}</li>
                ))}
            </ul>
        </>
    );
}

export default ResumePage;
