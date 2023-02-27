import { NavLink } from "react-router-dom";

export default function PageLink({ to, ...props }: any) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "rr-active-link" : " "
      }
      {...props}
    />
  );
}
