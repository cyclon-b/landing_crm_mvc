export interface AppDataModel {
  headerContent: HeaderContent;
  navigationMenu: NavigationMenu;
  contactsSection: ContactsSectionData;
  footerContent: FooterContent;
  features?: Feature[];
  pricingSection?: PricingSectionData;
  testimonialsSection?: TestimonialsSectionData;
}

export interface HeaderContent {
  pageTitleText: string;
  logoText: string;
  mainAdvertiseText: string;
  meinDescriptionText: string;
  leftButton: NavMenuItem;
  rightButton: NavMenuItem;
}

export interface Feature {
  featureTitle: string;
  featureDescription: string;
  callToActionLinkUrl: string;
  callToActionText: string;
  featureIconName: string;
}

export interface PricingSectionData {
  pricingHeaderText: string;
  pricingDescriptionText: string;
  pricingCards?: PricingCard[];
}

export interface PricingCard {
  pricingTypeText: string;
  priceText: string;
  cardOptionsList: PricingOption[];
  cardButtonText: string;
  isFocused: boolean;
}

export interface PricingOption {
  optionText: string;
  isActive: boolean;
}

export interface TestimonialsSectionData {
  testimonialsHeaderText: string;
  testimonialsDescriptionText: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  testimonialText: string;
  customerName?: string;
}

export interface ContactsSectionData {
  contactsSectionHeader: string;
  contactsSectionDescription: string;
  formText: FormText;
}

export interface FormText {
  fullNameControlLabel: string;
  emailControlLabel: string;
  phoneControlLabel: string;
  messageControlLabel: string;
  submitButtonText: string;
}

export interface NavigationMenu {
  navMenuItems: NavMenuItem[];
}

export interface NavMenuItem {
  linkText: string;
  linkUrl: string;
}

export interface FooterContent {
  copyRightName: string;
}
