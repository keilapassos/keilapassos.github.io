import work_in_progress_2 from "../../assets/work_in_progress_2.png";
import github_logo from "../../assets/github_logo.png";
import linkedin_logo from "../../assets/linkedin_logo.png";
import "./styles.css";

export const Main = () => {
  return (
    <div className="container">
      <img src={work_in_progress_2} alt="" />
      <div className="container-info">
        <h2>
          Enquanto isso,
          <span> veja:</span>
        </h2>
        <ul>
          <li>
            <a href="https://github.com/keilapassos">
              <img src={github_logo} alt="Github de Keila Passos" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/keila-aparecida-rodrigues-passos/">
              <img src={linkedin_logo} alt="Linkedin de Keila Passos" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
