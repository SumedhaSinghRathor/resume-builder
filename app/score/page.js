export default function Score() {
  return (
    <div className="w-[50%] p-5">
      <div className="flex gap-4 items-center border border-black">
        <div className="font-bold text-5xl size-fit p-2 rounded-full bg-conic-0 from-red-500 via-yellow-400 to-green-500">
          <div className="p-8 bg-background rounded-full">75</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            And immediately, instantly went for it
          </h1>
          <h2 className="text-xl">Yes, it's just that simple</h2>
        </div>
      </div>
    </div>
  );
}
