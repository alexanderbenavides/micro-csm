import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PostModel } from "../../../../models/components/modules";
import { ReducerModel } from "../../../../models/redux";
import { Input } from "../../form";
import './Header.scss';
export function Header() {
  const posts: PostModel.JsonData[] = useSelector(({data}: ReducerModel.Selector) => data.posts);
  const activeClassName = "underline";
  
  const submitForm = (evt?: Event) => {
    evt?.preventDefault();
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <img src="https://cdn.cdnlogo.com/logos/c/87/cms.svg" alt="Logo" loading="lazy"/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  About
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="posts">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  Blog
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? activeClassName : undefined
                  }
                >
                  Contact
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <form className="form" onSubmit={(e) => submitForm(e.nativeEvent)}>
          <Input 
            id="user"
            label="Search Post"
            value={undefined}
            autocomplete={
              {
                templateFilter: 'title',
                templateRedirect: 'id',
                data: posts
              }
            }
          />
      </form>
    </header>
  );
}

