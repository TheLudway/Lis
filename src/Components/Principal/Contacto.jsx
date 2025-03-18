import { useState} from "react"

export default function Contanto() {
    const [result, setResult] = useState("");
    const apiKey = import.meta.env.VITE_API_KEY

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <section onSubmit={onSubmit} class="p-5 mb-5">
            <div class="flex flex-col w-full justify-center items-center pl-5 pr-5 pb-5 " >
                <h1 class="font-code-bold text-secundary-blue text-2xl md:text-3xl sm:text-2xl text-center w-full">Contact Me</h1>
            </div>

            <form  class="flex flex-col gap-4 justify-center items-center">
                <input spellCheck={false} placeholder="Name" type="text" name="name" class=" bg-secundary-white w-80  md:w-150 p-2 font-code rounded-lg" required/>
                <input spellCheck={false} placeholder="Email" type="email" name="email" class=" bg-secundary-white w-80 md:w-150 p-2 font-code rounded-lg" required/>
                <textarea spellCheck={false} placeholder="message" type="message" name="message" class=" bg-secundary-white w-80 h-30 md:w-150 p-2 font-code rounded-lg" required/>
                <button type="submit" class="bg-secundary-green w-45 rounded-3xl p-3 mt-5 font-code-bold text-secundary-white">Enviar</button>
            </form>



        </section>
    )
}