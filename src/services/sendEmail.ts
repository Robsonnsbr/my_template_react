import emailjs from "@emailjs/browser";
import { EmailProps } from "../@types/EmailProps";

export const enviarEmail = ({ name, subject, message, email }: EmailProps) => {
  const templateParams = {
    from_name: name,
    subject: subject,
    message: message,
    email: email,
  };

  //   const params = [name, email, subject, message];
  //   const validate = params.indexOf((e) => e === "" console.log('vazio'))

  if (name === "" || email === "" || subject === "" || message === "") {
    console.log("algum item vazio!");
    return;
  }
  emailjs
    .send(
      "service_ybazufh",
      "template_zc1sp88",
      templateParams,
      "Ef1aPB0aL5H89yAcP"
    )
    .then((response) => {
      console.log("Email enviado", response.status, response.text);
      alert("O e-mail foi enviado com sucesso!");
    });
};

//TODO: Tratar erros com o catch. err. enviado não enviado.
//TODO: não deixar usuário apertar repetidamente o botão. tratar se ouve alteração para reenvio da mesma msg
