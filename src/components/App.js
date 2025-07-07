import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteEntry) => (
        <Note
          key={noteEntry.id}
          title={noteEntry.title}
          content={noteEntry.content}
        />
      ))}
    </div>
  );
}

export default App;
