import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function Section(props) {
  return (
    <section className={`container-fluid wrapper pt-4`}>
      <div className="container d-flex justify-content-between align-items-center">
        <h1
          className={
            props.titleAlign == "center" ? "h4 text-center w-100" : "h4"
          }
        >
          {props.title}
        </h1>
        {props.link && (
          <Link className="link" to={`/${props.link.href}`}>
            {props.link.text} <ArrowRight size={16} />
          </Link>
        )}
      </div>
      <main className="container">
        {props.children}
      </main>
    </section>
  );
}
