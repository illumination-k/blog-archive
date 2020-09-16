import Link from "next/link";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ textAlign: "center", color: "gray" }}>
        <Link href="/privacypolicy">
          <a>Privacy Policy</a>
        </Link>
      </div>
      <Copyright />
      <style jsx>{`
        a {
          text-decoration: none;
          font-size: 1em;
        }
      `}</style>
    </div>
  );
};

export default Footer;
