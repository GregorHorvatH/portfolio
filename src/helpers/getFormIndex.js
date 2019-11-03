export default function getFormIndex (forms, name) {
  return forms.findIndex(item => item.name === name);
}

