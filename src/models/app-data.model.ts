export interface AppDataModel {
  headerContent: HeaderContent;
  navigationMenu: NavigationMenu;
  contactsSection: ContactsSectionData;
  footerContent: FooterContent;
  features?: Feature[];
  pricingSection?: PricingSectionData;
  testimonialsSection?: TestimonialsSectionData;
}

interface HeaderContent {
  pageTitleText: string;
  logoText: string;
  mainAdvertiseText: string;
  meinDescriptionText: string;
  leftButton: NavMenuItem;
  rightButton: NavMenuItem;
}

interface Feature {
  featureTitle: string;
  featureDescription: string;
  callToActionLinkUrl: string;
  callToActionText: string;
  featureIconName: string;
}

interface PricingSectionData {
  pricingHeaderText: string;
  pricingDescriptionText: string;
  pricingCards?: PricingCard[];
}

interface PricingCard {
  pricingTypeText: string;
  priceText: string;
  cardOptionsList: PricingOption[];
  cardButtonText: string;
  isFocused: boolean;
}

interface PricingOption {
  optionText: string;
  isActive: boolean;
}

interface TestimonialsSectionData {
  testimonialsHeaderText: string;
  testimonialsDescriptionText: string;
  testimonials: Testimonial[];
}

interface Testimonial {
  testimonialText: string;
  customerName?: string;
}

interface ContactsSectionData {
  contactsSectionHeader: string;
  contactsSectionDescription: string;
  formText: FormText;
}

interface FormText {
  fullNameControlLabel: string;
  emailControlLabel: string;
  phoneControlLabel: string;
  messageControlLabel: string;
  submitButtonText: string;
}

interface NavigationMenu {
  navMenuItems: NavMenuItem[];
}

interface NavMenuItem {
  linkText: string;
  linkUrl: string;
}

interface FooterContent {
  copyRightName: string;
}
