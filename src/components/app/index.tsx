import React from "react";

const App: React.FC = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-zinc-500/30 aspect-video rounded-xl" />
        <div className="bg-zinc-500/30 aspect-video rounded-xl" />
        <div className="bg-zinc-500/30 aspect-video rounded-xl" />
      </div>
      <div className="bg-zinc-500/30 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </section>
  );
};

export default App;
