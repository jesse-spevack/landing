'use client';

type Props = {
  setNewLead: React.Dispatch<React.SetStateAction<any>>;
}

export default function SignUpForm({setNewLead}: Props) {
  const createLead = async ( e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // setNewLead(true);
    const formData = new FormData(e.currentTarget);

    const body = { email: formData.get('email') }

    const res = await fetch('/api/leads', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (res.ok) {
      const data = await res.json();
      console.log("hello world 1!!")
      console.log(data.email)
    } else {
      console.error(`Error: ${res.status} - ${res.statusText}`)
    }
  };

  return (
    <form onSubmit={createLead} className="mt-5 sm:flex sm:items-center">
      <div className="w-full sm:max-w-xs">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="disabled:opacity-75 block w-full rounded-md border-0 py-1.5 pl-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="disabled:opacity-75 mt-3 inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm enabled:hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 sm:ml-3 sm:mt-0 sm:w-auto"
        onClick={() => setNewLead(false)}
      >
        Sign up
      </button>
    </form>
  )
}