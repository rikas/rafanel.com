import emailjs from '@emailjs/browser';

const TEMPLATE_ID = 'template_dgnmy5f';
const PUBLIC_KEY = 'FarjtpGQkZEBKQitV';
const SERVICE_ID = 'default_service';

const rsvpSender = ({ params, onSuccess, onFailure }) => {
  const firstAdult = params.adults[0];

  const templateParams = {
    from_name: firstAdult.name.trim(),
    from_email: params.email.trim(),
    message_html: `<p><strong>Adultos</strong> (${params.adults.length})</p><p><strong>Crianças</strong> (${params.children.length})</p>`,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    function () {
      onSuccess();
    },
    function () {
      onFailure();
    },
  );
};

export default rsvpSender;
