import React from "react";
import data from "@/lib/rss/data.json";
export default function NoteList(){
  return (
    <>
      <div>
        <h1>NoteList</h1>
      </div>
      <div>
        {data.map((i) => (
          <a key={i.link} href={i.link}>
            <h3>{i.title}</h3>
          </a>
        ))}
      </div>
    </>
  );
}