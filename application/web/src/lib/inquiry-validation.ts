export const inquiryTypes = ['general', 'custom-cake', 'product-information', 'other'] as const;
export type InquiryType = typeof inquiryTypes[number];
export type InquiryValues = {firstName: string; lastName: string; region: string; state: string; email: string; telephone: string; inquiryType: string; category: string; message: string; eventDate: string};
export type InquiryField = keyof InquiryValues;
export type InquiryError = 'required' | 'invalidEmail' | 'nameTooLong' | 'locationTooLong' | 'emailTooLong' | 'phoneTooLong' | 'messageTooShort' | 'messageTooLong' | 'invalidDate' | 'pastDate' | 'invalidType' | 'invalidCategory';
export type InquiryErrors = Partial<Record<InquiryField, InquiryError>>;
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function validateInquiry(values: InquiryValues, today = localToday()): InquiryErrors {
  const errors: InquiryErrors = {};
  for (const field of ['firstName', 'lastName'] as const) {
    if (!values[field].trim()) errors[field] = 'required';
    else if (values[field].trim().length > 100) errors[field] = 'nameTooLong';
  }
  for (const field of ['region', 'state'] as const) {
    if (values[field].trim().length > 100) errors[field] = 'locationTooLong';
  }
  if (!values.email.trim()) errors.email = 'required';
  else if (values.email.trim().length > 254) errors.email = 'emailTooLong';
  else if (!emailPattern.test(values.email.trim())) errors.email = 'invalidEmail';
  if (values.telephone.trim().length > 40) errors.telephone = 'phoneTooLong';
  if (!values.inquiryType) errors.inquiryType = 'required';
  else if (!inquiryTypes.includes(values.inquiryType as InquiryType)) errors.inquiryType = 'invalidType';
  if (values.category && !['cakes', 'cupcakes', 'custom-orders'].includes(values.category)) errors.category = 'invalidCategory';
  const length = values.message.trim().length;
  if (!length) errors.message = 'required';
  else if (length < 20) errors.message = 'messageTooShort';
  else if (length > 2000) errors.message = 'messageTooLong';
  if (values.inquiryType === 'custom-cake' && values.eventDate) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(values.eventDate);
    const date = new Date(`${values.eventDate}T12:00:00Z`);
    if (!match || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== values.eventDate) errors.eventDate = 'invalidDate';
    else if (values.eventDate < today) errors.eventDate = 'pastDate';
  }
  return errors;
}
