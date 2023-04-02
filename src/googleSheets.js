const API_URL = 'https://api.sheety.co/92bc1e237d28de7e9a6e05f7e2831915/rafanelCom/inscritos';

export const postRsvp = async ({ data, onSuccess, onError }) => {
  const { email, adults, children, comments } = data;

  const adultString = adults
    .map((adult) => {
      if (adult.allergies.length === 0) return adult.name;
      return `${adult.name} (${adult.allergies.map((al) => al.name).join(', ')})`;
    })
    .join('\n');

  const childString = children
    .map((child) => {
      const modeStr = child.mode === 'ceremony-only' ? 'apenas cerimonia' : 'cerimonia + jantar';
      const base = `${child.name}, ${child.age}, ${modeStr}`;
      if (child.allergies.length === 0) return base;
      return `${base} (${child.allergies.map((al) => al.name).join(', ')})`;
    })
    .join('\n');

  const sheetData = { email: email.trim(), adults: adultString, children: childString, comments };

  console.log(data);
  console.log(sheetData);

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inscrito: sheetData }),
  });

  if (response.status === 200) {
    const json = await response.json();
    console.log(json);
    onSuccess(true);
  } else {
    onError();
  }
};
