function SignUp() {
  return (
    <section className="w-full h-screen bg-bgColor flex items-center justify-center">
      <div className="border-2 border-red-600 w-1/2 h-5/6 text-center">
        <h1 className="text-center text-white text-3xl mb-6">Sign Up </h1>
        <h2 className="text-3xl font-semibold text-green-200 mb-6">
          Who are you?
        </h2>
        <div className="flex justify-evenly">
          <div className="w-24 h-24 rounded-full border-2 "></div>
          <div className="w-24 h-24 rounded-full border-2 "></div>
          <div className="w-24 h-24 rounded-full border-2 "></div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
