export interface AppDataModel {
  headerText: HeaderContent;
  contactsSection: ContactsSectionData;
  features?: Feature[];
  pricingSection?: PricingSectionData;
  testimonialsSection?: TestimonialsSectionData;
}

interface HeaderContent {
  mainAdvertiseText: string;
  meinDescriptionText: string;
  leftButtonText: string;
  rightButtonText: string;
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
}