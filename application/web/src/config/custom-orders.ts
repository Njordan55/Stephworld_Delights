import type messages from '../../messages/en.json';

type CustomOrdersTextKey = keyof typeof messages.CustomOrders;
export type CustomOrderStep = {
  id: string;
  icon: 'choose' | 'request' | 'confirm';
  titleKey: CustomOrdersTextKey;
  descriptionKey: CustomOrdersTextKey;
  title?: string;
  description?: string;
};
export type CustomOrdersContent = {
  titleKey: CustomOrdersTextKey;
  descriptionKey: CustomOrdersTextKey;
  noteKey: CustomOrdersTextKey;
  title?: string;
  description?: string;
  note?: string;
  steps: readonly CustomOrderStep[];
  action: {href: string; labelKey: CustomOrdersTextKey};
};

// Text is localized in CustomOrders messages. A future Admin content service can
// supply the same contract with published, locale-resolved titles/descriptions.
export const customOrdersContent: CustomOrdersContent = {
  titleKey: 'title',
  descriptionKey: 'description',
  noteKey: 'confirmationNote',
  steps: [
    {id: 'choose', icon: 'choose', titleKey: 'chooseTitle', descriptionKey: 'chooseDescription'},
    {id: 'request', icon: 'request', titleKey: 'requestTitle', descriptionKey: 'requestDescription'},
    {id: 'confirm', icon: 'confirm', titleKey: 'confirmTitle', descriptionKey: 'confirmDescription'}
  ],
  action: {href: '/contact', labelKey: 'requestCake'}
};
