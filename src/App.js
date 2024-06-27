import { useState } from "react";
import "./styles.css";

// faqs (data)
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

// App
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

// Accordion
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItems
          title={el.title}
          // text={el.text}
          num={i}
          key={el.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {el.text}
        </AccordionItems>
      ))}
    </div>
  );
}

// AccordionItems
function AccordionItems({ num, title, curOpen, setCurOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
