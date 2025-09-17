export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidName = (name: string) => {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;
  return nameRegex.test(name.trim());
};

export const isValidMessage = (message: string) => {
  const messageRegex = /^[\wÀ-ÖØ-öø-ÿ0-9\s.,!?'"-]{5,}$/;
  return messageRegex.test(message.trim());
};
