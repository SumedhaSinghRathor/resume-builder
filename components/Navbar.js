import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ toPDF }) {
  return (
    <nav className="bg-foreground text-background text-2xl p-2.5 flex">
      <div className="w-[50vw] uppercase flex justify-between font-bold">
        <div>resume</div>
        <div className="text-sm flex bg-background p-0.5 h-fit rounded-full capitalize">
          <button
            href="/score"
            className="bg-foreground px-2 py-1 rounded-full"
          >
            Build
          </button>
          <button href="/build" className="text-foreground px-2 py-1">
            Score
          </button>
        </div>
      </div>
      <div className="w-[50vw] uppercase flex items-center justify-end">
        <FontAwesomeIcon
          icon={faDownload}
          className="size-6"
          onClick={() => toPDF()}
        />
      </div>
    </nav>
  );
}
