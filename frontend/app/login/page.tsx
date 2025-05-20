import { Metadata } from "next";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

function InputField({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={twMerge(
                className,
                "w-full text-md px-5 py-3 bg-[#D9D9D9] text-[#888888] rounded-0"
            )}
            {...props}
        />
    );
}

export const metadata: Metadata = {
    title: "Login",
    description: "Login Page",
};

export default function LoginPage() {
    const onLogin = async (form: FormData) => {
        "use server";
        console.log("oi mundo");
        console.log(form);
        void form;
    };

    const outroBotao = async (form: FormData) => {
        "use server";
        console.log("oi mundo 2 -sem dados direciionar para uma url ");
        throw redirect("https://www.uol.com.br");
        void form;
    };

    const onCadastro = async (form: FormData) => {
        "use server";
        console.log("Cadastro enviado");
        console.log(form);
        void form;
    };

    return (
        <main className="w-full flex flex-col items-center justify-center mt-[100px] gap-y-10">
            {/* Formulário de Login */}
            <form
                action={onLogin}
                className="flex flex-col w-full max-w-md gap-y-5 items-center justify-center"
            >
                <InputField
                    type="text"
                    name="login"
                    id="login"
                    placeholder="Login"
                />
                <InputField
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Senha"
                />
                <button
                    type="submit"
                    className="bg-[#333333] text-white px-12 py-2"
                >
                    Login
                </button>
            </form>

            {/* Botão extra */}
            <form action={outroBotao}>
                <button
                    type="submit"
                    className="bg-[#333333] text-white px-12 py-2"
                >
                    botao 2
                </button>
            </form>

            {/* Novo Formulário de Cadastro */}
            <form
                action={onCadastro}
                className="flex flex-col w-full max-w-md gap-y-5 items-center justify-center"
            >
                <InputField
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                />
                <InputField type="text" name="cpf" id="cpf" placeholder="CPF" />
                <InputField
                    type="number"
                    name="idade"
                    id="idade"
                    placeholder="Idade"
                />
                <InputField
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
                <InputField
                    type="text"
                    name="endereco"
                    id="endereco"
                    placeholder="Endereço"
                />
                <button
                    type="submit"
                    className="bg-[#333333] text-white px-12 py-2"
                >
                    Cadastrar
                </button>
            </form>
        </main>
    );
}
