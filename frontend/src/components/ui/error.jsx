export function Error({ message }) {
  return (
    <div className="h-screen w-full flex items-center justify-center  bg-slate-800">
      <h1 className="font-bold text-red-500 text-4xl">{message}</h1>
    </div>
  );
}
