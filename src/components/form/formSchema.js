import { array, object, string } from 'yup';

const formSchema = object({
  email: string().required('Tem de preencher o email').email('Email inválido'),
  adults: array().of(
    object().shape({
      name: string().required('Tem de preencher o nome'),
    }),
  ),
  children: array().of(
    object().shape({
      name: string().required('Tem de preencher o nome'),
      mode: string().required('Tem de escolher uma das opções'),
    }),
  ),
});

export default formSchema;
