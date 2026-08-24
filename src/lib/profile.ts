import { z } from "zod";
import profileData from "@/data/profile.json";
import careerData from "@/data/career.json";
import techStackData from "@/data/tech-stack.json";
import ctaData from "@/data/cta.json";

const ProfileSchema = z.object({
  nameJa: z.string(),
  nameEn: z.string(),
  occupation: z.string(),
  home: z.object({
    intro: z.string(),
    base: z.string(),
    experience: z.string(),
    status: z.string(),
    about: z.string(),
  }),
  profilePage: z.object({
    intro: z.array(z.string()),
  }),
});

const CareerItemSchema = z.object({
  period: z.string(),
  role: z.string(),
  description: z.string(),
  isLatest: z.boolean(),
});

const TechStackCategorySchema = z.object({
  ja: z.string(),
  en: z.string(),
  items: z.array(z.string()),
});

const CtaSchema = z.object({
  heading: z.string(),
  description: z.string(),
});

const CtaDataSchema = z.object({
  home: CtaSchema,
  profile: CtaSchema,
});

export type CareerItem = z.infer<typeof CareerItemSchema>;
export type TechStackCategory = z.infer<typeof TechStackCategorySchema>;

// プロフィール系の文言データ。src/data/{profile,career,tech-stack,cta}.json を編集して差し替える。
export const PROFILE = ProfileSchema.parse(profileData);
export const CAREER: CareerItem[] = z.array(CareerItemSchema).parse(careerData);
export const TECH_STACK: TechStackCategory[] = z
  .array(TechStackCategorySchema)
  .parse(techStackData);
export const CTA = CtaDataSchema.parse(ctaData);
