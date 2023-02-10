import philip from "../../large.jpg";

export function Introduction() {
  return (
    <>
      <div className="flex md:justify-end pb-14 pt-[93px]">
        <h2 className="text-4xl lowercase w-[200px] md:text-right pt-[16px]">
          Philip Andersson
        </h2>
      </div>

      <h3>Introduction</h3>
      <p>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-hand print:text-black">
          Hello there!
        </span>{" "}
        I'm a senior front end engineer with more than 10 years of experience in
        web developement. I'm a 30 year old from southern Sweden 🇸🇪
      </p>

      <p>
        I have a passion for creating intuitive user experiences and I believe
        in the power of clear, clean, and consistent code. Working with me
        you'll see all aspects of software development: requirements gathering,
        planning, design and implementation.
      </p>

      <img
        src={philip}
        alt="Philip Andersson"
        className="w-1/2 print:block hidden rounded-xl mt-10"
      />
    </>
  );
}
