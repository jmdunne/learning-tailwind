export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-green-600">Hello World!</h1>
      {/* This h1 element uses the custom Vue.js color defined in the Tailwind config file */}
      <h1 className="text-vuejs-300">Hello World!</h1>
    </div>
  );
}
